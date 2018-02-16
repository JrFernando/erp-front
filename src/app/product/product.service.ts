import { Injectable } from '@angular/core';

export declare interface Produto {
  codigo: number;
  nome: string;
  quantidade: number;
  preco: number;
}

@Injectable()
export class ProductService {

  private produtos: Produto[];

  constructor() {
    this.produtos = [
      {codigo: 1, nome: 'Produto 1', quantidade: 10, preco: 3.0},
      {codigo: 2, nome: 'Produto 2', quantidade: 20, preco: 2.5},
      {codigo: 3, nome: 'Produto 3', quantidade: 15, preco: 1.0},
      {codigo: 4, nome: 'Produto 4', quantidade: 5, preco: 10.0},
      {codigo: 5, nome: 'Produto 5', quantidade: 25, preco: 5}
    ];
   }

  getAll() {
    return this.produtos;
  }

}
