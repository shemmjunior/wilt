import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { NebularModule } from '../../shared/nebular.module';
import { UtilityModule } from '../../shared/utility.module';


@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    NebularModule,
    UtilityModule
  ]
})
export class ExploreModule { }
