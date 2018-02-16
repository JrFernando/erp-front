import { Component, OnInit } from '@angular/core';

import { ClientService, Cliente } from '../client.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
})
export class ClientListComponent implements OnInit {

  public tableData1: TableData;
  clientes: Cliente[];

  constructor(private service: ClientService) {
    this.clientes = service.getAll();

    this.tableData1 = {
      headerRow: [ '#', 'Nome', 'Email', 'Tipo'],
      dataRows: []
   };

  }

  ngOnInit() {
    this.clientes.forEach(value => {
     const row: any[] = [
       value.codigo,
       value.nome,
       value.email,
       value.typeClient
     ];
     this.tableData1.dataRows.push(row);
    });
  }

}
