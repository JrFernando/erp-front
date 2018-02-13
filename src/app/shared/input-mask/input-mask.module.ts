import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextMaskModule } from 'angular2-text-mask';
import { MaskService } from './mask.service';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule
  ],
  declarations: [],
  exports: [
    TextMaskModule,
  ],
  providers: [ MaskService ]
})
export class InputMaskModule { }
