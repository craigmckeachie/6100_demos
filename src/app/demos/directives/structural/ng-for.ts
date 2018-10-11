import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  template: `
    <ul>
      <li *ngFor="let fruit of fruits">
          {{fruit}}
      </li>
    </ul>

  `,
})
export class NgForComponent {
  fruits = ['Apple', 'Orange', 'Plum'];
}
