import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoListComponent } from './demo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AnimationBasics } from './demos/animation-basics';
import { ParentComponent as ChangeDetectionParentComponent } from './demos/change-detection';
import { TemplateDemosComponent } from './demos/basics/templates';

import { HomePageComponent } from './demos/basics/nesting-components';
import { HelloWorldComponent } from './demos/basics/first-component';
import { PropertyBindingComponent } from './demos/template-syntax/property-binding';
import { EventBindingComponent } from './demos/template-syntax/event-binding';
import { TwoWayBindingComponent } from './demos/template-syntax/two-way-binding';
import { NgIfComponent } from './demos/directives/structural/ng-if';
import { NgForComponent } from './demos/directives/structural/ng-for';
import { NgSwitchComponent } from './demos/directives/structural/ng-switch';
import { NgClassComponent } from './demos/directives/attribute/ng-class';
import { NgStyleComponent } from './demos/directives/attribute/ng-style';
import { PipesDemoComponent } from './demos/template-syntax/pipes';
import { ParentComponent as InputParentComponent } from './demos/components/input-property';
import { ParentComponent as OutputParentComponent } from './demos/components/output-event';
import { StylingInlineComponent } from './demos/components/styling-inline';
import { StylingExternalComponent } from './demos/components/styling-external';
import { ParentComponent as LifecycleHooksParentComponent } from './demos/components/lifecycle-hooks';
import { ReactiveFormsBindingComponent } from './demos/forms/reactive-forms-binding';
import { ReactiveFormsValidationComponent } from './demos/forms/reactive-forms-validation';
import { ReactiveFormsValidationMessagesComponent } from './demos/forms/reactive-forms-validation-messages';
import { RegisterInjectServiceComponent } from './demos/services/register-inject';
import { MovieListComponent } from './demos/routing/routing-advanced';
import { PageComponent as ExportModulePageComponent } from './demos/modules/module-basics';
import {
  InjectableServiceModule,
  InjectableServiceComponent
} from './demos/services/injectable';
import { JsonPipeComponent } from './demos/template-syntax/pipe-json';
import { RxJSDemosComponent } from './demos/rxjs/rxjs-demos.component';

const routes: Routes = [
  { path: '', redirectTo: 'demos', pathMatch: 'full' },
  { path: 'demos', component: DemoListComponent },
  { path: 'first-component', component: HelloWorldComponent },
  { path: 'nesting', component: HomePageComponent },
  { path: 'templates', component: TemplateDemosComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'animation', component: AnimationBasics },
  { path: 'change-detection', component: ChangeDetectionParentComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'ngif', component: NgIfComponent },
  { path: 'ngfor', component: NgForComponent },
  { path: 'ngswitch', component: NgSwitchComponent },
  { path: 'ngclass', component: NgClassComponent },
  { path: 'ngstyle', component: NgStyleComponent },
  { path: 'pipes', component: PipesDemoComponent },
  { path: 'json-pipe', component: JsonPipeComponent },
  { path: 'input', component: InputParentComponent },
  { path: 'output', component: OutputParentComponent },
  { path: 'styling-inline', component: StylingInlineComponent },
  { path: 'styling-external', component: StylingExternalComponent },
  { path: 'lifecycle-hooks', component: LifecycleHooksParentComponent },
  { path: 'reactive-forms-binding', component: ReactiveFormsBindingComponent },
  { path: 'module-exports', component: ExportModulePageComponent },
  { path: 'rxjs', component: RxJSDemosComponent },
  {
    path: 'register-inject-service',
    component: RegisterInjectServiceComponent
  },
  {
    path: 'injectable',
    component: InjectableServiceComponent
  },
  {
    path: 'reactive-forms-validation',
    component: ReactiveFormsValidationComponent
  },
  {
    path: 'reactive-forms-validation',
    component: ReactiveFormsValidationComponent
  },
  {
    path: 'reactive-forms-validation-messages',
    component: ReactiveFormsValidationMessagesComponent
  },

  {
    path: 'company',
    loadChildren: './demos/routing/routing-basics#CompanyWebSiteModule'
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [DemoListComponent]
})
export class AppRoutingModule {}
