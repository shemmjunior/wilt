import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WiltsComponent } from './wilts.component';
import { PostWiltComponent } from './post-wilt/post-wilt.component';
import { MyWiltsComponent } from './my-wilts/my-wilts.component';
import { FavWiltsComponent } from './fav-wilts/fav-wilts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WiltsComponent
      },
      {
        path: 'add',
        component: PostWiltComponent
      },
      {
        path: 'own',
        component: MyWiltsComponent
      },
      {
        path: 'fav',
        component: FavWiltsComponent
      }
    ]


  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WiltsRoutingModule { }
