import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostWiltComponent } from './post-wilt.component';

const routes: Routes = [{ path: '', component: PostWiltComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostWiltRoutingModule { }
