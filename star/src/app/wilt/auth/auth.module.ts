import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NebularModule } from '../../shared/nebular.module';
import { UtilityModule } from '../../shared/utility.module';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NebularModule,
    UtilityModule

  ],
})
export class AuthModule { }
