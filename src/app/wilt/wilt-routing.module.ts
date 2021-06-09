import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../wilt/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    redirectTo: 'home/wilts',
  },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'wilts',
        loadChildren: () =>
          import('../wilt/wilts/wilts.module').then((m) => m.WiltsModule),
      },
      {
        path: 'explore',
        loadChildren: () =>
          import('../wilt/explore/explore.module').then((m) => m.ExploreModule),
      },
      { path: 'profile', loadChildren: () => import('../wilt/profile/profile.module').then(m => m.ProfileModule) }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WiltRoutingModule {}
