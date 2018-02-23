import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form/product-form.component';

const productRoutes: Routes = [
    { path: 'produto', component: ProductComponent },
    { path: 'produto/novo', component: ProductFormComponent},
    { path: 'produto/editar/:id', component: ProductFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
