import { Component } from '@angular/core';

//========================================================
@Component({
  selector: 'carosel',
  template:
    '<div style="border: 1px dashed;padding: 5px;"><h2>Carosel</h2></div>',
})
export class CaroselComponent {}

//========================================================
@Component({
  selector: 'home-page',
  template:
    '<div style="border: 1px solid;padding: 5px;"> <h1>Home</h1><carosel></carosel>  </div>',
})
export class HomePageComponent {}

//========================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [HomePageComponent, CaroselComponent],
})
export class HomeModule {}
