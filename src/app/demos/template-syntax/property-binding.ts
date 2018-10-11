import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-demo',
  template: `
    <img  [src]="image.path" [title]="image.name"
          [alt]="image.name" class="transparent-img-bg">
  `,
})
export class PropertyBindingComponent {
  image = {
    path: '../../assets/angular_whiteTransparent.png',
    name: 'Angular Logo',
  };
}
