import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { MaskService } from './../../shared/input-mask/mask.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create-edit',
  templateUrl: './client-create-edit.component.html',
})
export class ClientCreateEditComponent implements OnInit {

  formulario: FormGroup;
  typeClient: String = 'fisica';

  constructor(private formBuilder: FormBuilder,
              private service: ClientService,
              public mask: MaskService,
              private http: Http ) {
  }

  ngOnInit() {
    this.formulario = this.getForm();
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.service.insert(this.formulario.value);

    /*this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);

        this.resetForm();
      },
      (error: any) => alert('Erro'));*/
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
          rua: [null, Validators.required],
          numero: [null, Validators.required],
          bairro: [null, Validators.required],
          complemento: [null],
          cep: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
          cidade: [{value: null, disabled: true}, Validators.required],
          estado: [{value: null, disabled: true}, Validators.required]
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
          rua: [null, Validators.required],
          numero: [null, Validators.required],
          bairro: [null, Validators.required],
          complemento: [null],
          cep: [null, [Validators.required, Validators.minLength(9)]],
          cidade: [{value: null, disabled: true}, Validators.required],
          estado: [{value: null, disabled: true}, Validators.required]
        })
      });
    }
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

  resetForm() {
    this.formulario.reset();
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

}
