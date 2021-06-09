import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WiltsComponent } from './wilts.component';

const routes: Routes = [{ path: '', component: WiltsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WiltsRoutingModule { }
