import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found/not-found.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.page').then(
        (m) => m.OnboardingPage
      ),
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.page').then(
        (m) => m.OnboardingPage
      ),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./pages/payment/payment.page').then((m) => m.PaymentPage),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'tabs-proposal',
    loadChildren: () =>
      import('./pages/tabs-proposal/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.routes),
  },

  // {
  //   path: 'auth/routes',
  //   component: SignUpPage,
  // },
  {
    path: '**',
    component: NotFoundPage,
  },
];
