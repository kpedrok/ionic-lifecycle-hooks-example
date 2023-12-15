import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class Tab1Page implements OnInit, OnDestroy {
  constructor() {
    console.log('🚀 ~ file: tab1.page.ts:25 ~ Tab1Page ~ constructor');
  }

  ngOnInit() {
    console.log('🚀 ~ file: tab1.page.ts:29 ~ Tab1Page ~ ngOnInit');
  }
  ngOnDestroy() {
    console.log('🚀 ~ file: tab1.page.ts:32 ~ Tab1Page ~ ngOnDestroy');
  }

  ionViewWillEnter() {
    console.log('🚀 ~ file: tab1.page.ts:29 ~ Tab1Page ~ ionViewWillEnter');
  }
  ionViewDidEnter() {
    console.log('🚀 ~ file: tab1.page.ts:32 ~ Tab1Page ~ ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('🚀 ~ file: tab1.page.ts:35 ~ Tab1Page ~ ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('🚀 ~ file: tab1.page.ts:38 ~ Tab1Page ~ ionViewDidLeave');
  }
}
