import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleComponent } from './sale.component';
import { SaleRoutingModule } from './sale.routing.module';
import { SaleService } from './sale.service';
import { SaleListComponent } from './sale-list/sale-list.component';

@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule,
  ],
  declarations: [
    SaleComponent,
    SaleListComponent
  ],
  providers: [
    SaleService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
   ]
})
export class SaleModule { }
