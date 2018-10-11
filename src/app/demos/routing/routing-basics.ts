import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'website-navigation',
  template: `
  <ul>
    <li><a [routerLink]="['../home']">Home</a></li>
    <li><a [routerLink]="['../about']">About</a></li>
    <li><a [routerLink]="['../contact']">Contact</a></li>
  </ul>
  `,
})
export class WebsiteNavigationComponent {}

@Component({
  selector: 'home',
  template: `
  <website-navigation></website-navigation>
  <h1>Home</h1>`,
})
export class HomeComponent {}

@Component({
  selector: 'about',
  template: `
  <website-navigation></website-navigation>
  <h1>About</h1>`,
})
export class AboutComponent {}

@Component({
  selector: 'contact',
  template: `
  <website-navigation></website-navigation>
  <h1>Contact Us</h1>`,
})
export class ContactComponent {}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    WebsiteNavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
})
export class CompanyWebSiteModule {}
