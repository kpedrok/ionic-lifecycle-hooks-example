import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { SignUpPage } from './sign-up/sign-up.page';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'sign-up',
    component: SignUpPage,
  },
];
