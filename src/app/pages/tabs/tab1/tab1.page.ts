import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  `,
})
export class Tab1Page implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {}

  ionViewWillEnter() {
    console.log('🚀 Tab1 ~ ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Tab1 ~ ionViewWillLeave');
  }
}
