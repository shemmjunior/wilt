import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NebularModule } from '../../shared/nebular.module';
import { UtilityModule } from '../../shared/utility.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NebularModule,
    UtilityModule
  ]
})
export class ProfileModule { }
