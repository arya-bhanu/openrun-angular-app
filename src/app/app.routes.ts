import { Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { HomeLayoutComponent } from './global/layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
