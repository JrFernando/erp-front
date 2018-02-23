import { Component, OnInit } from '@angular/core';

import { ProductService, Produto } from '../product.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  public tableData1: TableData;
  produtos: Produto[];

  constructor(private service: ProductService) {
    this.produtos = service.getAll();

    this.tableData1 = {
      headerRow: [ '#', 'Nome', 'Quantidade', 'Preço'],
      dataRows: []
    };
   }

  ngOnInit() {
    this.produtos.forEach(value => {
    const row: any[] = [
      value.codigo,
      value.descricao,
      value.estoque,
      value.preco_venda
    ];
    this.tableData1.dataRows.push(row);
   });
 }
}
