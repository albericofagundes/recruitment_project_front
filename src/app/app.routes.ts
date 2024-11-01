import { Routes } from '@angular/router';
import { BasicLayoutComponent } from './shared/components/layouts/basic-layout/basic-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: BasicLayoutComponent,
  },
];
