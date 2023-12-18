import { Component, EnvironmentInjector, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipse, square, triangle } from 'ionicons/icons';

@Component({
  selector: 'app-tabs-proposal',
  templateUrl: 'tabs.component.html',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterLink],
})
export class TabsComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}
