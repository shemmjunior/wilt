import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WiltRoutingModule } from './wilt-routing.module';
import { HomeComponent } from './home/home.component';
import { NebularModule } from '../shared/nebular.module';
import { NbMenuService } from '@nebular/theme';
import { UtilityModule } from '../shared/utility.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, WiltRoutingModule, NebularModule, UtilityModule],
  providers: [NbMenuService],
})
export class WiltModule {}
