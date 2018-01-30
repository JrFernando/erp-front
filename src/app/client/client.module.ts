import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import { ClientListComponent } from './client-list/client-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientComponent, ClientListComponent],
  exports: [ClientComponent]
})
export class ClientModule { }
