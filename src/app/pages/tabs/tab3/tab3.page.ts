import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
  template: `
    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  `,
})
export class Tab3Page implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  ionViewWillEnter() {
    console.log('🚀 Tab3 ~ ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Tab3 ~ ionViewWillLeave');
  }
}
