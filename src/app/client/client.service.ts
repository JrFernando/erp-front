import { Injectable } from '@angular/core';

export declare interface Cliente {
  codigo: string;
  nome: string;
  email: string;
  typeClient: string;
}

@Injectable()
export class ClientService {

  public clientes: Cliente[];

  constructor() {
    this.clientes = [
      {codigo: '1', nome: 'Cliente 1', email: 'cliente1@gmail.com', typeClient: 'fisica'},
      {codigo: '2', nome: 'Cliente 2', email: 'cliente2@gmail.com', typeClient: 'fisica'},
      {codigo: '3', nome: 'Cliente 3', email: 'cliente3@gmail.com', typeClient: 'fisica'},
      {codigo: '4', nome: 'Cliente 4', email: 'cliente4@gmail.com', typeClient: 'juridica'},
      {codigo: '5', nome: 'Cliente 5', email: 'cliente5@gmail.com', typeClient: 'juridica'}
    ];
  }

  getId(id: number) {
    return this.clientes[id];
  }

  getAll() {
    return this.clientes;
  }

  insert(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  update(cliente: Cliente) {
    this.clientes[cliente.codigo] = cliente;
  }

}
