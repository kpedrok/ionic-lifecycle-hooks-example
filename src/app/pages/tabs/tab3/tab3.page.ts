import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
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
        <ion-title> Tab 3 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <app-explore-container name="Tab 3 page"></app-explore-container>
    </ion-content>
  `,
})
export class Tab3Page implements OnInit, OnDestroy {
  constructor() {
    console.log('🚀 Tab3 ~ constructor');
  }

  ngOnInit() {
    console.log('🚀 Tab3 ~ ngOnInit');
  }

  ngOnDestroy() {
    console.log('🚀 Tab3 ~ ngOnDestroy');
  }

  ionViewWillEnter() {
    console.log('🚀 Tab3 ~ ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('🚀 Tab3 ~ ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Tab3 ~ ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('🚀 Tab3 ~ ionViewDidLeave');
  }
}
