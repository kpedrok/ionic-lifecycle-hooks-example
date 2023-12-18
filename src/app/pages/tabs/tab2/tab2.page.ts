import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
  template: `
    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <div
        style="display: flex; flex-direction: column; gap:10px; padding:10px"
      >
        <a routerLink="/auth/routes"> Auth/routes</a>

        <div></div>
      </div>
    </ion-content>
  `,
})
export class Tab2Page implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  ionViewWillEnter() {
    console.log('🚀 Tab2 ~ ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Tab2 ~ ionViewWillLeave');
  }
}
