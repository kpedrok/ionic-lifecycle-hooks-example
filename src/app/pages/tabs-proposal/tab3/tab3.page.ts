import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
  template: `
    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/auth/sign-up"> auth/sign-up</a>

        <div></div>
      </div>
    </ion-content>
  `,
})
export class Tab3ProposalPage implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  ionViewWillEnter() {
    console.log('🚀 Tab3ProposalPage ~ ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Tab3ProposalPage ~ ionViewWillLeave');
  }
}
