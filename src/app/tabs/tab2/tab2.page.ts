import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
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
        <ion-title> Tab 2 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <app-explore-container name="Tab 2 page"></app-explore-container>
    </ion-content>
  `,
})
export class Tab2Page implements OnInit, OnDestroy {
  constructor() {
    console.log('🚀 Tab2 ~ constructor');
  }

  ngOnInit() {
    console.log('🚀 Tab2 ~ ngOnInit');
  }

  ngOnDestroy() {
    console.log('🚀 Tab2 ~ ngOnDestroy');
  }

  ionViewWillEnter() {
    console.log('🚀 Tab2 ~ ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('🚀 Tab2 ~ ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('🚀 Tab2 ~ ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('🚀 Tab2 ~ ionViewDidLeave');
  }
}
