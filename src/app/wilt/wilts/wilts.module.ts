import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WiltsRoutingModule } from './wilts-routing.module';
import { WiltsComponent } from './wilts.component';
import { NebularModule } from '../../shared/nebular.module';


@NgModule({
  declarations: [
    WiltsComponent
  ],
  imports: [
    CommonModule,
    WiltsRoutingModule,
    NebularModule
  ]
})
export class WiltsModule { }
