import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-animation-basics',
  template: `
    <p *ngIf="toggle" @fade>
      Animation Basics
    </p>
    <button (click)="onClick()">{{toggle ? 'remove': 'add'}}</button>
  `,
  styles: [
    `
    p{
      background-color: #ddd;
      padding: 15px;
      width: 200px;
    }
  `,
  ],
  animations: [
    trigger('fade', [
      //verbose: no states, both add and remove
      // transition('void => *', [
      //   style({ opacity: 0 }),
      //   animate(2000, style({ opacity: 1 }))
      // ]),
      // transition('* => void', [
      //   // style({ opacity: 1 }),
      //   animate(2000, style({ opacity: 0 }))
      // ])

      //medium: add states, use bi-directional arrow
      // state('void', style({ opacity: 0 })),
      // state('*', style({ opacity: 1 })),
      // transition('* <=> void', [
      //   animate(2000)
      // ])

      //terse: remove one state that can be calculated and use predefined events
      // add ease function see: http://cubic-bezier.com/
      state('void', style({ opacity: 0 })),
      transition(':enter,:leave', [animate('2000ms ease-in-out')]),
    ]),
  ],
})
export class AnimationBasics implements OnInit {
  toggle = true;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.toggle = !this.toggle;
  }
}
