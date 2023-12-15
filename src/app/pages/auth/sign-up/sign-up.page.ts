import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>sign-up</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">sign-up</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  `,
})
export class SignUpPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
