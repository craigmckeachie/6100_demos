import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(
    public name: string,
    public path?: string,
    public children?: MenuItem[]
  ) {}
  get isHeading() {
    return !this.path && this.children;
  }
  get isLink() {
    return this.path;
  }
}

@Component({
  selector: 'app-demo-list',
  template: `
        <h1>Demos</h1>
        <ul>
            <li *ngFor="let item of menuItems">
                <h2 *ngIf="item.isHeading">{{item.name}}</h2>

                <ul>
                  <li *ngFor="let item of item.children">
                    <h3 *ngIf="item.isHeading">{{item.name}}</h3>
                    <a *ngIf="item.isLink" [routerLink]="item.path">{{item.name}}</a>
                    <span *ngIf="!item.isHeading && !item.isLink">{{item.name}}</span>
                    <ul>
                      <li *ngFor="let item of item.children">
                        <h4 *ngIf="item.isHeading">{{item.name}}</h4>
                        <a *ngIf="item.isLink" [routerLink]="item.path">{{item.name}}</a>
                      </li>
                    </ul>
                  </li>
                </ul>

            </li>
        </ul>
    `
})
export class DemoListComponent implements OnInit {
  menuItems = [
    new MenuItem('Basics', null, [
      new MenuItem('Bootstrapping an Application (open main.ts)', null, null),
      new MenuItem('First Component', '/first-component'),
      new MenuItem('Nesting Components', '/nesting'),
      new MenuItem('Templates', '/templates')
    ]),

    new MenuItem('Template Syntax', null, [
      new MenuItem('Property Binding', '/property-binding'),
      new MenuItem('Event Binding', '/event-binding'),
      new MenuItem('Two-way Binding', '/two-way-binding'),
      new MenuItem('Pipes', '/pipes'),
      new MenuItem('JSON Pipe', '/json-pipe')
    ]),

    new MenuItem('Directives', null, [
      new MenuItem('Structural', null, [
        new MenuItem('ngIf', '/ngif'),
        new MenuItem('ngFor', '/ngfor'),
        new MenuItem('ngSwitch', '/ngswitch')
      ]),

      new MenuItem('Attribute', null, [
        new MenuItem('ngClass', '/ngclass'),
        new MenuItem('ngStyle', '/ngstyle')
      ])
    ]),

    new MenuItem('Components', null, [
      new MenuItem('Input Properties', '/input'),
      new MenuItem('Output Events', '/output'),
      new MenuItem('Styling: Inline', '/styling-inline'),
      new MenuItem('Styling: External', '/styling-external'),
      new MenuItem('Lifecycle Hooks', '/lifecycle-hooks'),
      new MenuItem('Advanced', null)
    ]),

    new MenuItem('Forms', null, [
      new MenuItem('Reactive Forms Binding', '/reactive-forms-binding'),
      new MenuItem('Reactive Forms Validation', '/reactive-forms-validation'),
      new MenuItem(
        'Reactive Forms Validation Messages',
        '/reactive-forms-validation-messages'
      )
    ]),

    new MenuItem('Services', null, [
      new MenuItem('Register & Inject Service', '/register-inject-service'),
      new MenuItem('@Injectable', '/injectable')
    ]),

    new MenuItem('Routing', null, [
      new MenuItem('Routing Basics', '/company'),
      new MenuItem('Advanced Routing', '/movies')
    ]),

    new MenuItem('Modules', null, [
      new MenuItem('Basics: Declarations, Imports & Exports', '/module-exports')
    ]),

    new MenuItem('RxJS', null, [new MenuItem('RxJS Demos', '/rxjs')])
  ];

  constructor() {}

  ngOnInit() {}
}
