import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../../components/explore-container/explore-container.component';

@Component({
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Tab 1 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <app-explore-container name="Tab 1 page"></app-explore-container>
    </ion-content>
  `,
})
export class Tab1Page implements OnInit, OnDestroy {
  constructor() {
    console.log('🚀 Tab1 ~ constructor');
  }

  ngOnInit() {
    console.log('🚀 Tab1 ~ ngOnInit');
  }
  ngOnDestroy() {
    console.log('🚀 Tab1 ~ ngOnDestroy');
  }

  ionViewWillEnter() {
    console.log('🚀 Tab1 ~ ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('🚀 Tab1 ~ ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Tab1 ~ ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('🚀 Tab1 ~ ionViewDidLeave');
  }
}
