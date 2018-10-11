import { Component, Input } from '@angular/core';

//========================================================
@Component({
  selector: 'parent',
  template: `
      <h1>Parent</h1>
      <p>Here is your allowance.</p>
      <child [allowance]="money"></child>
  `,
})
export class ParentComponent {
  money: number = 12;
}

//========================================================
@Component({
  selector: 'child',
  template: `
      <h1>Child</h1>
      <p>My allowance is {{allowance | currency}}.</p>
  `,
})
export class ChildComponent {
  @Input() allowance: number;
}

//========================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentComponent, ChildComponent],
})
export class InputPropertyModule {}
