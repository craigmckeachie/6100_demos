import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
  template: `

    <h5>Click the paragraph below to highlight it.</h5>

    <p (click)="onClick()" class="" [ngStyle]="isHighlighted ? {'background-color': '#ffff00' }: {}">
        We need to button up our approach out of the loop, so get six alpha pups in here for a focus group. Cross
        functional teams enable out of the box brainstorming three-martini lunch. Cross-pollination can we align on
        lunch orders streamline, so horsehead offer pulling teeth time to open the kimono. Can I just chime in on
        that one enough to wash your face. This proposal is a win-win situation which will cause a stellar paradigm
        shift, and produce a multi-fold increase in deliverables idea shower. Idea shower. Imagineer gain traction
        yet dog and pony show thinking outside the box. Strategic fit.

    </p>
    <div>
        Courtesy of: <a href="http://officeipsum.com/">Office Ipsum</a>
    </div>

  `,
})
export class NgStyleComponent {
  isHighlighted = false;

  onClick() {
    this.isHighlighted = !this.isHighlighted;
  }
}
