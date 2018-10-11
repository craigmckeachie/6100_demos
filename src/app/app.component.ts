import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a href="">Demos</a>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'app';
}
