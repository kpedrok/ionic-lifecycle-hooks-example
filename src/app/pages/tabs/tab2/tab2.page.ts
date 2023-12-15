import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../../components/explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    RouterLink,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Tab 2 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
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
        <a routerLink="/tabs/tab1" routerLinkActive="active">/tabs/tab1</a>
      </div>

      <app-explore-container name="Tab 2 page"></app-explore-container>
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
