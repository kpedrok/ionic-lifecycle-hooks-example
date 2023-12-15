import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: '',
    redirectTo: '/walkthrough',
    pathMatch: 'full',
  },
  {
    path: 'walkthrough',
  },
  {
    path: 'getting-started',
  },
  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
  },
  {
    path: 'auth/signup',
  },
  {
    path: 'auth/forgot-password',
  },
  {
    path: 'app',
  },
  {
    path: 'contact-card',
  },
  {
    path: 'forms-and-validations',
  },
  {
    path: 'forms-filters',
  },
  {
    path: 'page-not-found',
  },
  {
    path: 'showcase',
  },
  {
    path: 'firebase',
    redirectTo: 'firebase/auth/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'firebase/auth',
  },
  {
    path: 'firebase/crud',
  },
  {
    path: 'maps',
  },
  {
    path: 'video-playlist',
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];
