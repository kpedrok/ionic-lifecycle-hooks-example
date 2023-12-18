import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  template: `
    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Payment</ion-title>
        </ion-toolbar>
      </ion-header>

      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/onboarding"> Onboarding</a>

        <div></div>

        <a routerLink="/tabs"> Tabs</a>
        <a routerLink="/tabs/tab1"> Tabs/Tab1</a>

        <div></div>
        <a routerLink="/auth/sign-up"> Auth/sign-up</a>
      </div>
    </ion-content>
  `,
})
export class PaymentPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('🚀 Payment ~ ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Payment ~ ionViewWillLeave');
  }
}
