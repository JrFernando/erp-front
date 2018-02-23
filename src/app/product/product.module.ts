import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product.routing.module';
import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFormComponent,
    FormDebugComponent
  ],
  exports: [ProductComponent],
  providers: [
    ProductService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class ProductModule { }
