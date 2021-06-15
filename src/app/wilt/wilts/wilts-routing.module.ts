import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WiltsComponent } from './wilts.component';
import { PostWiltComponent } from './post-wilt/post-wilt.component';
import { MyWiltsComponent } from './my-wilts/my-wilts.component';
import { FavWiltsComponent } from './fav-wilts/fav-wilts.component';
import { EditWiltComponent } from './edit-wilt/edit-wilt.component';

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
        children: [
          {
            path: '',
            component: MyWiltsComponent,
          },
          {
            path: 'edit/:id',
            component: EditWiltComponent
          }
        ]
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
