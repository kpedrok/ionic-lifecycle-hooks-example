import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>forgot-password</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">forgot-password</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  `,
})
export class ForgotPasswordPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('🚀 ForgotPasswordPage ~ ngOnInit');
  }
}
