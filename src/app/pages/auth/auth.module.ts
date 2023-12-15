import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
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
  {
    path: 'forgot-password',
    component: ForgotPasswordPage,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
