import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { MaskService } from './../../shared/input-mask/mask.service';
import { ClientService, Cliente } from '../client.service';

declare var $: any;

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
})
export class ClientFormComponent implements OnInit, OnDestroy {

  formulario: FormGroup;
  typeClient: String;
  private inscricao: Subscription;
  cliente: Cliente;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: ClientService,
              public mask: MaskService,
              private http: Http ) {
    this.typeClient = 'fisica';
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.cliente = this.service.getId(id);
        if (this.cliente != null) {
          this.typeClient = this.cliente.typeClient;
        }
      }
    );

    this.formulario = this.getForm();

    this.patchValues();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  patchValues() {
    if (this.cliente != null) {
      this.formulario.patchValue(this.cliente);
      this.formulario.get('typeClient').disable();

      if (this.typeClientIsFisica()) {
        this.formulario.get('cpf').disable();
      } else {
        this.formulario.get('cnpj').disable();
      }
    }
  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario.get('codigo').value != null) {
      this.service.update(this.formulario.value);
      this.router.navigate(['/cliente']);
      this.showNotification('top', 'right', 2, 'Cliente atualizado com sucesso!');
    } else {
      this.service.insert(this.formulario.value);
      this.router.navigate(['/cliente']);
      this.showNotification('top', 'right', 2, 'Cliente salvo com sucesso!');
    }

    /*this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);

        this.resetForm();
      },
      (error: any) => alert('Erro'));*/
  }

  resetForm() {
    this.formulario.reset();
  }

  exluirCliente() {
    const cod = this.formulario.get('codigo').value;
    this.service.remove(cod);
    alert('Removido');
    this.router.navigate(['/cliente']);
  }

  showNotification(from, align, color, message) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    $.notify({
        icon: 'ti-save',
        // message: 'Welcome to <b>Paper Dashboard</b> - a beautiful dashboard for every web developer.'
        message: message
      },
      {
          type: type[color],
          timer: 4000,
          placement: {
            from: from,
            align: align
          }
      }
    );
  }

  consultaCep() {
    let cep = this.formulario.get('endereco.cep').value;

    if (cep !== null) {
      cep = cep.replace(/\D/g, '');
      if (cep !== '') {
        const validaCep = /^[0-9]{8}$/;
          if (validaCep.test(cep)) {
          this.http.get('//viacep.com.br/ws/' + cep + '/json')
            .subscribe(dados => {
              const dado = dados.json();
              this.formulario.patchValue({
                endereco: {
                  cidade: dado.localidade,
                  estado: dado.uf
                }
              });
            });
      }
    }
  }
}

  typeClientIsFisica() {
    return this.typeClient === 'fisica';
  }

  onSelectionTypeClient(value: string) {
    this.typeClient = value;
    this.formulario = this.getForm();
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  getForm() {
    if (this.typeClientIsFisica()) {
      return this.formBuilder.group({
        typeClient: ['fisica'],
        codigo: [null],
        nome: [null, Validators.required],
        cpf: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
        rg: [null],
        data_nascimento: [null],
        sexo: ['f'],
        email: [null],
        telefone: [null],
        celular: [null],
        nome_mae: [null],
        nome_pai: [null],
        obs: [null],
        endereco: this.formBuilder.group({
          endereco_id: [null],
          rua: [null],
          numero: [null],
          bairro: [null],
          complemento: [null],
          cep: [null, Validators.minLength(9)],
          cidade: [null],
          estado: [null]
        })
      });
    } else {
      return this.formBuilder.group({
        typeClient: ['juridica'],
        codigo: [null],
        nome: [null, Validators.required],
        cnpj: [null, Validators.required],
        icms: [false],
        ie: [null],
        email: [null],
        telefone: [null],
        celular: [null],
        obs: [null],
        endereco: this.formBuilder.group({
          endereco_id: [null],
          rua: [null],
          numero: [null],
          bairro: [null],
          complemento: [null],
          cep: [null, Validators.minLength(9)],
          cidade: [null],
          estado: [null]
        })
      });
    }
  }


}
