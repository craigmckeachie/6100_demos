import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-1',
  template: `
    <h1>Widget 1</h1>
  `,
})
export class Widget1Component {}

@Component({
  selector: 'widget-2',
  template: `
    <h1>Widget 2</h1>
  `,
})
export class Widget2Component {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Widget1Component, Widget2Component],
  imports: [CommonModule],
  //comment this line to demonstrate module exports
  exports: [Widget1Component, Widget2Component],
  providers: [],
})
export class WidgetsModule {}

@Component({
  selector: 'my-page',
  template: `
    <widget-1></widget-1>
    <widget-2></widget-2>

  `,
})
export class PageComponent {}

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, WidgetsModule],
  exports: [],
  providers: [],
})
export class MyApplicationModule {}
// declarations, imports, and exports
