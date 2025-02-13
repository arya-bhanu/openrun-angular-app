import { Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { HomeLayoutComponent } from './global/layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'community',
        loadChildren: () =>
          import('./module/community/community.module').then(
            (m) => m.CommunityModule
          ),
      },
      {
        path: 'trail-run',
        loadChildren: () =>
          import('./module/race/trail-race/trail-race.module').then(
            (m) => m.TrailRaceModule
          ),
      },
      {
        path: 'road-run',
        loadChildren: () =>
          import('./module/race/road-race/road-race.module').then(
            (m) => m.RoadRaceModule
          ),
      },
    ],
  },
];
