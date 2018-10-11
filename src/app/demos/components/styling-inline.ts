import { Component } from '@angular/core';

@Component({
  selector: 'styling-inline',
  template: '<h1>Styling Components: Inline</h1>',
  styles: [
    `
    h1{
      color: rgb(255, 165, 0)
    }
  `,
  ],
})
export class StylingInlineComponent {}
