import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('./tab1/tab1.page').then((m) => m.Tab1ProposalPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./tab2/tab2.page').then((m) => m.Tab2ProposalPage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./tab3/tab3.page').then((m) => m.Tab3ProposalPage),
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
];
