import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClientComponent } from './client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateEditComponent } from './client-create-edit/client-create-edit.component';
import { ClienteRoutingModule } from './client.routing.module';
import { FormDebugComponent } from '../form-debug/form-debug.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientCreateEditComponent,
    FormDebugComponent
  ],
  exports: [ClientComponent]
})
export class ClientModule { }
