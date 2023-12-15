import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  template: `
    <div id="container">
      <strong>{{ name }}</strong>
      <p>
        Explore
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
          >UI Components</a
        >
      </p>
    </div>
  `,
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
