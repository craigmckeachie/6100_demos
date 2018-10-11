import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo',
  template: `
  <my-class-binding-demo></my-class-binding-demo>

  `,
})
export class NgClassComponent {}

// <my-class-binding-demo></my-class-binding-demo>
@Component({
  selector: 'my-class-binding-demo',
  template: `
        <br>

        <h5>Click the paragraph below to highlight it.</h5>

        <p (click)="onClick()" class="" [class.highlight]="isHighlighted">
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
  styles: [
    `
        .highlight {
            background-color: #ffff00;
        }
    `,
  ],
})
export class ClassBindingDemoComponent {
  isHighlighted = false;

  onClick() {
    this.isHighlighted = !this.isHighlighted;
  }
}

// <my-multiple-class-binding-demo></my-multiple-class-binding-demo>
@Component({
  selector: 'my-multiple-class-binding-demo',
  template: `
        <br>

        <h5>Click the paragraph below to highlight it.</h5>
        <h5>Double click the paragraph below to underline it.</h5>

        <p (click)="onClick()" (dblclick)="onDblClick()"
           class="uppercase"
           [class.highlight]="isHighlighted"
           [class.underline]="isUnderlined">
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
  styles: [
    `
        .uppercase {
            text-transform: uppercase;
        }

        .highlight {
            background-color: #ffff00;
        }

        .underline {
            text-decoration: underline;
        }
    `,
  ],
})
export class MultipleClassBindingDemoComponent {
  isHighlighted: boolean;
  isUnderlined: boolean;

  onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

  onDblClick() {
    this.isUnderlined = !this.isUnderlined;
  }
}

// <my-ngclass-binding-demo></my-ngclass-binding-demo>
@Component({
  selector: 'my-ngclass-binding-demo',
  template: `
        <br>

        <h5>Click the paragraph below to highlight it.</h5>
        <h5>Double click the paragraph below to underline it.</h5>
        <h5>Rick click the paragraph below to uppercase the text.</h5>

        <p (click)="onClick()" (dblclick)="onDblClick()" (contextmenu)="onRightClick($event)"
           [ngClass]="getClasses()">
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
  styles: [
    `
        .uppercase {
            text-transform: uppercase;
        }

        .highlight {
            background-color: #ffff00;
        }

        .underline {
            text-decoration: underline;
        }
    `,
  ],
})
export class NgClassBindingDemoComponent {
  isHighlighted: boolean;
  isUnderlined: boolean;
  isUppercase: boolean;

  onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

  onDblClick() {
    this.isUnderlined = !this.isUnderlined;
  }

  onRightClick(event) {
    event.preventDefault();
    this.isUppercase = !this.isUppercase;
  }

  getClasses() {
    return {
      highlight: this.isHighlighted,
      underline: this.isUnderlined,
      uppercase: this.isUppercase,
    };
  }
}
