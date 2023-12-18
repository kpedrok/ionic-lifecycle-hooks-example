import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>sign-up</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">sign-up</ion-title>
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
export class SignUpPage implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {}

  ionViewWillEnter() {
    console.log('🚀 SignUpPage ~ ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 SignUpPage ~ ionViewWillLeave');
  }
}
