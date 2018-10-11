import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  template: `
    <a href="/event-binding" (click)="onClick($event)">Click Me!</a>
    <p [innerText]="message"></p>
  `,
})
export class EventBindingComponent {
  message = '';

  onClick(event) {
    event.preventDefault();
    this.message = 'clicked';
  }
}
