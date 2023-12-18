import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  animated = true; // Define animated property

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (this.router.url.includes('tabs-proposal/')) {
        this.animated = false;
      } else {
        this.animated = true;
      }
    });
  }
}
