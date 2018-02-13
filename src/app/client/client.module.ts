import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClientComponent } from './client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClienteRoutingModule } from './client.routing.module';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { InputMaskModule } from './../shared/input-mask/input-mask.module';
import { ClientService } from './client.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InputMaskModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientFormComponent,
    FormDebugComponent
  ],
  exports: [ClientComponent],
  providers: [ClientService]
})
export class ClientModule { }
