import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tabs/tab2',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: 'walkthrough',
  // },
  // {
  //   path: 'getting-started',
  // },
  // {
  //   path: 'auth',
  //   redirectTo: 'auth/login',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'auth/login',
  // },
  // {
  //   path: 'auth/signup',
  // },
  // {
  //   path: 'auth/forgot-password',
  // },
  // {
  //   path: 'app',
  // },
  // {
  //   path: 'contact-card',
  // },
  // {
  //   path: 'forms-and-validations',
  // },
  // {
  //   path: 'forms-filters',
  // },
  // {
  //   path: 'page-not-found',
  // },
  // {
  //   path: 'showcase',
  // },
  // {
  //   path: 'firebase',
  //   redirectTo: 'firebase/auth/sign-in',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'firebase/auth',
  // },
  // {
  //   path: 'firebase/crud',
  // },
  // {
  //   path: 'maps',
  // },
  // {
  //   path: 'video-playlist',
  // },
  // {
  //   path: '**',
  //   redirectTo: 'page-not-found',
  // },
  // {
  //   path: 'getting-started',
  //   loadComponent: () =>
  //     import('./getting-started/getting-started.page').then(
  //       (m) => m.GettingStartedPage
  //     ),
  // },
  // {
  //   path: 'auth',
  //   loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  // },
  // {
  //   path: 'login',
  //   loadComponent: () =>
  //     import('./auth/login/login.page').then((m) => m.LoginPage),
  // },
  // {
  //   path: 'sign-up',
  //   loadComponent: () =>
  //     import('./auth/sign-up/sign-up.page').then((m) => m.SignUpPage),
  // },
  // {
  //   path: 'forgot-password',
  //   loadComponent: () =>
  //     import('./auth/forgot-password/forgot-password.page').then(
  //       (m) => m.ForgotPasswordPage
  //     ),
  // },
];
