import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Produto, ProductService } from '../product.service';
import { MaskService } from './../../shared/input-mask/mask.service';

declare var $: any;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit, OnDestroy {

  formulario: FormGroup;
  produto: Produto;
  private inscricao: Subscription;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: ProductService,
              public mask: MaskService) { }

  ngOnInit() {
    // Obtem o paramentro id, caso exista
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.produto = this.service.getId(id);
      }
    );

    this.formulario = this.getForm();

    // Preenche os campos, caso o produto já exista
    this.patchValues();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario.get('codigo').value != null) {
      this.service.update(this.formulario.value);

      // Redireciona para página de produtos
      this.router.navigate(['/produto']);
      this.showNotification('top', 'right', 2, 'Produto atualizado com sucesso!');
    } else {
      this.service.insert(this.formulario.value);

      // Redireciona para página de produtos
      this.router.navigate(['/produto']);
      this.showNotification('top', 'right', 2, 'Produto salvo com sucesso!');
    }

  }

  exluirProduto() {
    const cod = this.formulario.get('codigo').value;
    this.service.remove(cod);
    alert('Removido');
    this.router.navigate(['/produto']);
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

  patchValues() {
    if (this.produto != null) {
      this.formulario.patchValue(this.produto);
    }
  }

  resetForm() {
    this.formulario.reset();
  }

  getForm() {
    return this.formBuilder.group({
      codigo: [null],
      descricao: [null, Validators.required],
      preco_venda: [null, Validators.required],
      preco_custo: [null],
      peso_liquido: [null],
      peso_bruto: [null],
      estoque: [null],
      unidade_medida: [null],
      estoque_minimo: [null],
      estoque_maximo: [null],
      categoria: [null],
      marca: [null],
      localizacao: [null],
      obs: [null],
      ncm: [null],
      cest: [null],
      tributacao: [null],
      fornecedor: [null]
    });
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
