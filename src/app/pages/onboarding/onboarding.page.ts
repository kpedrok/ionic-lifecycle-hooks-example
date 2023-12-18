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
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>onboarding</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">onboarding</ion-title>
        </ion-toolbar>
      </ion-header>

      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/auth/login" routerLinkActive="active">/auth/login</a>
        <a routerLink="/auth/sign-up" routerLinkActive="/auth/sign-up"
          >/auth/sign-up</a
        >
      </div>

      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/tabs/tab2" routerLinkActive="active">/tabs/tab2</a>
      </div>

      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/onboarding" routerLinkActive="active">/onboarding</a>
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
