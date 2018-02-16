import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientFormComponent } from './client-form/client-form.component';

const clientRoutes: Routes = [
    { path: 'cliente', component: ClientComponent },
    { path: 'cliente/novo', component: ClientFormComponent},
    { path: 'cliente/editar/:id', component: ClientFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {}
