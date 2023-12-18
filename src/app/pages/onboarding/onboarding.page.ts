import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  template: `
    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Onboarding</ion-title>
        </ion-toolbar>
      </ion-header>

      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/payment"> Payment</a>

        <div></div>
        <a routerLink="/auth/sign-up"> Auth/sign-up</a>

        <div></div>
        <a routerLink="/tabs-proposal/tab1"> /tabs-proposal/tab1</a>
      </div>
    </ion-content>
  `,
})
export class OnboardingPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('🚀 Onboarding ~ ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Onboarding ~ ionViewWillLeave');
  }
}
