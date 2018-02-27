import { Injectable } from '@angular/core';
import { Produto } from '../product/product.service';

export declare interface Sale {
  codigo: number;
  total: number;
  produtos: any[];
  quantidade: number[];
}

@Injectable()
export class SaleService {

  private sales: Sale[];

  constructor() {
    this.sales = [
      {codigo: 1, total: 10, produtos: [{codigo: 1, descricao: 'Produto 1'}], quantidade: [2]},
      {codigo: 2, total: 20, produtos: [{codigo: 2, descricao: 'Produto 2'}], quantidade: [3]},
      {codigo: 3, total: 4, produtos: [{codigo: 1, descricao: 'Produto 1'}], quantidade: [4]},
      {codigo: 4, total: 40, produtos: [{codigo: 2, descricao: 'Produto 2'}], quantidade: [1]},
      {codigo: 5, total: 5, produtos: [{codigo: 1, descricao: 'Produto 1'}], quantidade: [2]}
    ];
  }

  getAll() {
    return this.sales;
  }

  getId(id: number): Sale {
    for (let i = 0; i < this.sales.length; i++) {
      const sale = this.sales[i];
      if (sale.codigo == id) {
        return sale;
      }
    }
  }

  insert(sale: Sale) {
    this.sales.push(sale);
  }

  update(sale: Sale) {
    for (let i = 0; i < this.sales.length; i++) {
      if (this.sales[i].codigo == sale.codigo) {
        this.sales[i] = sale;
      }
    }
  }

  remove(codigo: number) {
    for (let i = 0; i < this.sales.length; i++) {
      if (this.sales[i].codigo == codigo) {
        this.sales[i] = this.sales[this.sales.length - 1];
        this.sales.pop();
        this.ordena();
      }
    }
  }

  ordena() {
    this.sales.sort((c1: Sale, c2: Sale) => {
      return c1.codigo - c2.codigo;
    });
  }

}
