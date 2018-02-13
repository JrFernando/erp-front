import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientFormComponent } from './client-form/client-form.component';

const clientRoutes: Routes = [
    { path: 'client', component: ClientComponent},
    { path: 'cliente', component: ClientFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {}
