import { Routes } from '@angular/router';
import { homeGuard } from './guards/home.guard';

export const routes: Routes = [
  {
    path: 'home',
    canActivate: [homeGuard],
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'next',
    loadComponent: () => import('./pages/next/next.page').then( m => m.NextPage)
  },
  {
    path: 'alternate',
    loadComponent: () => import('./pages/alternate/alternate.page').then( m => m.AlternatePage)
  },
];
