import {
  Component,
  Input,
  AfterViewChecked,
  AfterContentChecked,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

//========================================================
@Component({
  selector: 'parent',
  template: `
      <h1>Parent</h1>
      <p>Open your browser developer tools to the console tab.</p>
      <ol>
        <li>Click the button once to create a component and see the lifecycle hooks called.</li>
        <li>Click the button again to remove the component and see the lifecycle hooks called.</li>
        <li>Assign value to the child components childProperty and click the button again to see the onChanges hook called.</li>
      </ol>
      <button (click)="onClick()">{{hasChild? 'Remove': 'Create'}} Child</button>
      <child *ngIf="hasChild" [childProperty]="value"></child>
  `,
})
export class ParentComponent {
  hasChild = false;
  value = 'wisdom';

  onClick() {
    this.hasChild = !this.hasChild;
  }
}

//========================================================
@Component({
  selector: 'child',
  template: `
      <h1>Child</h1>
  `,
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() childProperty: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`OnChanges`);
  }
  constructor() {
    console.log('Constructor');
  }
  ngOnInit(): void {
    console.log(`OnInit`);
  }
  ngDoCheck(): void {
    console.log(`DoCheck`);
  }
  ngAfterContentInit(): void {
    console.log(`AfterContentInit`);
  }
  ngAfterContentChecked(): void {
    console.log(`AfterContentChecked`);
  }
  ngAfterViewInit(): void {
    console.log(`AfterViewInit`);
  }
  ngAfterViewChecked(): void {
    console.log(`AfterViewChecked`);
  }
  ngOnDestroy(): void {
    console.log(`OnDestroy`);
  }
}

//========================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentComponent, ChildComponent],
})
export class LifeCycleHooksModule {}
