import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product.routing.module';
import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  exports: [ProductComponent],
  providers: [
    ProductService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class ProductModule { }
