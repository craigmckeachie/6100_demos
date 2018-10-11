import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationBasics } from './demos/animation-basics';
import {
  ParentComponent,
  ChildAComponent,
  ChildBComponent,
  GrandChildAComponent,
} from './demos/change-detection';
import { TemplatesModule } from './demos/basics/templates';

import { HomeModule } from './demos/basics/nesting-components';
import { HelloWorldComponent } from './demos/basics/first-component';

import { NgIfComponent } from './demos/directives/structural/ng-if';
import { NgForComponent } from './demos/directives/structural/ng-for';
import { NgSwitchComponent } from './demos/directives/structural/ng-switch';
import { NgStyleComponent } from './demos/directives/attribute/ng-style';
import { CompanyWebSiteModule } from './demos/routing/routing-basics';
import { PropertyBindingComponent } from './demos/template-syntax/property-binding';
import { EventBindingComponent } from './demos/template-syntax/event-binding';
import { TwoWayBindingModule } from './demos/template-syntax/two-way-binding';
import {
  NgClassComponent,
  ClassBindingDemoComponent,
  MultipleClassBindingDemoComponent,
  NgClassBindingDemoComponent,
} from './demos/directives/attribute/ng-class';
import { PipesDemoComponent } from './demos/template-syntax/pipes';
import { InputPropertyModule } from './demos/components/input-property';
import { OutputModule } from './demos/components/output-event';
import { StylingInlineComponent } from './demos/components/styling-inline';
import { StylingExternalComponent } from './demos/components/styling-external';
import { LifeCycleHooksModule } from './demos/components/lifecycle-hooks';
import { ReactiveFormsBindingModule } from './demos/forms/reactive-forms-binding';
import { ReactiveFormsValidationMessagesModule } from './demos/forms/reactive-forms-validation-messages';
import { RegisterInjectServiceModule } from './demos/services/register-inject';
import {
  ReactiveFormsValidationComponent,
  ReactiveFormsValidationModule,
} from './demos/forms/reactive-forms-validation';
import { InjectableServiceModule } from './demos/services/injectable';
import MoviesModule from './demos/routing/routing-advanced';
import { MyApplicationModule as MyExportsApplicationModule } from './demos/modules/module-basics';
import { JsonPipeComponent } from './demos/template-syntax/pipe-json';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AnimationBasics,
    ParentComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildAComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    ClassBindingDemoComponent,
    MultipleClassBindingDemoComponent,
    NgClassBindingDemoComponent,
    NgStyleComponent,
    PipesDemoComponent,
    StylingInlineComponent,
    StylingExternalComponent,
    JsonPipeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TemplatesModule,
    HomeModule,
    TwoWayBindingModule,
    InputPropertyModule,
    OutputModule,
    LifeCycleHooksModule,
    ReactiveFormsBindingModule,
    ReactiveFormsValidationModule,
    ReactiveFormsValidationMessagesModule,
    RegisterInjectServiceModule,
    InjectableServiceModule,
    MoviesModule,
    MyExportsApplicationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
