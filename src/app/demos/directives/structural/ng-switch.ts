import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-demo',
  template: `
    <div class="container">
    <button (click)="value=1">select - 1</button>
    <button (click)="value=2">select - 2</button>
    <button (click)="value=3">select - 3</button>
    <h5>You selected : {{value}}</h5>

    <hr>
    <div [ngSwitch]="value">

       <div *ngSwitchCase="1">1. Template - <b>{{value}}</b> </div>
       <div *ngSwitchCase="2">2. Template - <b>{{value}}</b> </div>
       <div *ngSwitchCase="3">3. Template - <b>{{value}}</b> </div>
       <div *ngSwitchDefault>Default Template</div>

    </div>
    </div>
  `,
})
export class NgSwitchComponent {
  value: number;
}
