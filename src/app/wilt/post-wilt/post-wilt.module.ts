import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostWiltRoutingModule } from './post-wilt-routing.module';
import { PostWiltComponent } from './post-wilt.component';


@NgModule({
  declarations: [
    PostWiltComponent
  ],
  imports: [
    CommonModule,
    PostWiltRoutingModule
  ]
})
export class PostWiltModule { }
