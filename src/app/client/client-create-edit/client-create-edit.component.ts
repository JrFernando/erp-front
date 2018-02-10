import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-client-create-edit',
  templateUrl: './client-create-edit.component.html',
})
export class ClientCreateEditComponent implements OnInit {

  formulario: FormGroup;
  typeClient: String = 'fisica';

  constructor(private formBuilder: FormBuilder,
              private http: Http ) { }

  ngOnInit() {
    this.formulario = this.getForm();
    /*this.formBuilder.group({
      typeClient: ['fisica'],
      codigo: [null],
      nome: [null, Validators.required],
      cpf: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      rg: [null],
      data_nascimento: [null],
      sexo: ['f'],
      cnpj: [null],
      icms: [null],
      ie: [null],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null],
      celular: [null, [Validators.required]],
      nome_maee: [null],
      nome_pai: [null],
      endereco: this.formBuilder.group({
        rua: [null, Validators.required],
        numero: [null],
        bairro: [null],
        complemento: [null],
        cep: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });*/

  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);

        this.resetForm();
      },
      (error: any) => alert('Erro'));
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
        email: [null, [Validators.required, Validators.email]],
        telefone: [null],
        celular: [null, [Validators.required]],
        nome_mae: [null],
        nome_pai: [null],
        endereco: this.formBuilder.group({
          rua: [null, Validators.required],
          numero: [null],
          bairro: [null],
          complemento: [null],
          cep: [null, Validators.required],
          cidade: [null, Validators.required],
          estado: [null, Validators.required]
        })
      });
    } else {
      return this.formBuilder.group({
        typeClient: ['juridica'],
        codigo: [null],
        nome: [null, Validators.required],
        cnpj: [null],
        icms: [null],
        ie: [null],
        email: [null, [Validators.required, Validators.email]],
        telefone: [null],
        celular: [null, [Validators.required]],
        endereco: this.formBuilder.group({
          rua: [null, Validators.required],
          numero: [null],
          bairro: [null],
          complemento: [null],
          cep: [null, Validators.required],
          cidade: [null, Validators.required],
          estado: [null, Validators.required]
        })
      });
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
