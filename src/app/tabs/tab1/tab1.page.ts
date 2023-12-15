import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

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
