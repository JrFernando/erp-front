import { Injectable } from '@angular/core';

export declare interface Cliente {
  codigo: number;
  nome: string;
  email: string;
  typeClient: string;
}

@Injectable()
export class ClientService {

  public clientes: Cliente[];

  constructor() {
    this.clientes = [
      {codigo: 1, nome: 'Cliente 1', email: 'cliente1@gmail.com', typeClient: 'fisica'},
      {codigo: 2, nome: 'Cliente 2', email: 'cliente2@gmail.com', typeClient: 'fisica'},
      {codigo: 3, nome: 'Cliente 3', email: 'cliente3@gmail.com', typeClient: 'fisica'},
      {codigo: 4, nome: 'Cliente 4', email: 'cliente4@gmail.com', typeClient: 'juridica'},
      {codigo: 5, nome: 'Cliente 5', email: 'cliente5@gmail.com', typeClient: 'juridica'}
    ];
  }

  getId(id: number) {
    for (let i = 0; i < this.clientes.length; i++) {
      const client = this.clientes[i];
      if (client.codigo == id) {
        return client;
      }
    }
  }

  getAll() {
    return this.clientes;
  }

  insert(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  update(cliente: Cliente) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].codigo == cliente.codigo) {
        this.clientes[i] = cliente;
      }
    }
  }

  remove(codigo: number) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].codigo == codigo) {
        this.clientes[i] = this.clientes[this.clientes.length - 1];
        this.clientes.pop();
        this.ordena();
      }
    }
  }

  ordena() {
    this.clientes.sort((c1: Cliente, c2: Cliente) => {
      return c1.codigo - c2.codigo;
    });
  }

}
