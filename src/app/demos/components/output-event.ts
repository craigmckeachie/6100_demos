import { Component, Input, Output, EventEmitter } from '@angular/core';

//========================================================
@Component({
  selector: 'parent',
  template: `
      <h1>Parent</h1>
      <p>{{response}}</p>
      <child (request)="onRequest($event)"></child>
  `,
})
export class ParentComponent {
  response = '';

  onRequest(requestEvent) {
    this.response = `No you can't have a ${requestEvent.for}`;
  }
}

//========================================================
@Component({
  selector: 'child',
  template: `
      <h1>Child</h1>
      <button (click)="onClick()">Make a request.</button>
  `,
})
export class ChildComponent {
  @Output() request = new EventEmitter();

  onClick() {
    this.request.emit({ for: 'phone' });
  }
}

//========================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentComponent, ChildComponent],
})
export class OutputModule {}
