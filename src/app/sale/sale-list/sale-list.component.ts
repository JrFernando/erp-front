import { Component, OnInit } from '@angular/core';

import { Sale } from '../sale.service';
import { SaleService } from './../sale.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
})
export class SaleListComponent implements OnInit {

  public tableData1: TableData;
  sales: Sale[];

  constructor(private service: SaleService) {
    this.sales = service.getAll();

    this.tableData1 = {
      headerRow: [ '#', 'Total'],
      dataRows: []
    };
  }

  ngOnInit() {
    this.sales.forEach(value => {
    const row: any[] = [
      value.codigo,
      value.total
    ];
    this.tableData1.dataRows.push(row);
   });
  }

}
