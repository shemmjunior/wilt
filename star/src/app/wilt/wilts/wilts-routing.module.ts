import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WiltsComponent } from './wilts.component';
import { PostWiltComponent } from './post-wilt/post-wilt.component';
import { MyWiltsComponent } from './my-wilts/my-wilts.component';
import { FavWiltsComponent } from './fav-wilts/fav-wilts.component';
import { EditWiltComponent } from './edit-wilt/edit-wilt.component';
import { WiltsResolver } from './resolvers/wilts.resolver';
import { OwnWiltsResolver } from './resolvers/ownwilts.resolver';
import { WiltResolver } from './resolvers/wilt.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WiltsComponent,
        resolve: { wiltsData: WiltsResolver }
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
            resolve: { ownWiltsData: OwnWiltsResolver }
          },
          {
            path: 'edit/:id',
            component: EditWiltComponent,
            resolve: { wiltData: WiltResolver }
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
  exports: [RouterModule],
  providers: [
    WiltsResolver,
    OwnWiltsResolver,
    WiltResolver
  ]
})
export class WiltsRoutingModule { }
