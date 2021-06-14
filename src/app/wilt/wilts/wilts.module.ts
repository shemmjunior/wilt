import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WiltsRoutingModule } from './wilts-routing.module';
import { WiltsComponent } from './wilts.component';
import { NebularModule } from '../../shared/nebular.module';
import { PostWiltComponent } from './post-wilt/post-wilt.component';
import { EditWiltComponent } from './edit-wilt/edit-wilt.component';
import { MyWiltsComponent } from './my-wilts/my-wilts.component';
import { FavWiltsComponent } from './fav-wilts/fav-wilts.component';


@NgModule({
  declarations: [
    WiltsComponent,
    PostWiltComponent,
    EditWiltComponent,
    MyWiltsComponent,
    FavWiltsComponent,

  ],
  imports: [
    CommonModule,
    WiltsRoutingModule,
    NebularModule
  ]
})
export class WiltsModule { }
