import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleComponent } from './sale.component';

const saleRoutes: Routes = [
    { path: 'venda', component: SaleComponent },
];

@NgModule({
    imports: [RouterModule.forChild(saleRoutes)],
    exports: [RouterModule]
})
export class SaleRoutingModule {}
