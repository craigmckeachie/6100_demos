import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  template: `

  <!--longhand -->
  <!--
  <input type="text" [value]="firstname" (input)="this.firstname=$event.target.value" placeholder="enter first name" >
  -->

  <!--shorthand -->
  <input type="text" [(ngModel)]="firstname" placeholder="enter first name" >

  <br>
  {{firstname}}
  `,
})
export class TwoWayBindingComponent {
  firstname = '';
}

//========================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TwoWayBindingComponent],
})
export class TwoWayBindingModule {}
