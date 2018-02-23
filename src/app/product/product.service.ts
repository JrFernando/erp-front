import { Injectable } from '@angular/core';

export declare interface Produto {
  codigo: number;
  descricao: string;
  estoque: number;
  preco_venda: number;
}

@Injectable()
export class ProductService {

  private produtos: Produto[];

  constructor() {
    this.produtos = [
      {codigo: 1, descricao: 'Produto 1', estoque: 10, preco_venda: 3.0},
      {codigo: 2, descricao: 'Produto 2', estoque: 20, preco_venda: 2.5},
      {codigo: 3, descricao: 'Produto 3', estoque: 15, preco_venda: 1.0},
      {codigo: 4, descricao: 'Produto 4', estoque: 5, preco_venda: 10.0},
      {codigo: 5, descricao: 'Produto 5', estoque: 25, preco_venda: 5}
    ];
   }

  getAll() {
    return this.produtos;
  }

  getId(id: number): Produto {
    for (let i = 0; i < this.produtos.length; i++) {
      const product = this.produtos[i];
      if (product.codigo == id) {
        return product;
      }
    }
  }

  insert(produto: Produto) {
    this.produtos.push(produto);
  }

  update(produto: Produto) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].codigo == produto.codigo) {
        this.produtos[i] = produto;
      }
    }
  }


  remove(codigo: number) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].codigo == codigo) {
        this.produtos[i] = this.produtos[this.produtos.length - 1];
        this.produtos.pop();
        this.ordena();
      }
    }
  }

  ordena() {
    this.produtos.sort((c1: Produto, c2: Produto) => {
      return c1.codigo - c2.codigo;
    });
  }

}
