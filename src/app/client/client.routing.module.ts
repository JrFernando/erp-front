import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientCreateEditComponent } from './client-create-edit/client-create-edit.component';

const clientRoutes: Routes = [
    { path: 'client', component: ClientComponent},
    { path: 'cliente', component: ClientCreateEditComponent}
];

@NgModule({
    imports: [RouterModule.forChild(clientRoutes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {}
