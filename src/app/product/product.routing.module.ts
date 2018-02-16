import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const productRoutes: Routes = [
    { path: 'produto', component: ProductComponent },
    // { path: 'cliente/novo', component: 'ClientFormComponent'},
    // { path: 'cliente/editar/:id', component: ClientFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
