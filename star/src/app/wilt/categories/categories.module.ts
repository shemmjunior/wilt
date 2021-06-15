import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { UtilityModule } from '../../shared/utility.module';
import { NebularModule } from '../../shared/nebular.module';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NebularModule,
    UtilityModule
  ]
})
export class CategoriesModule { }
