import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'reactive-forms-binding',
  template: `
  <form [formGroup]="loginForm" (submit)="onSubmit()">
  <input type="text"
    formControlName="username"
    placeholder="username">
  <br>
  <input type="password"
    formControlName="password"
    placeholder="password">
  <br>
  <button>Sign In</button>
  </form>
  `,
})
export class ReactiveFormsBindingComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}

//========================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ReactiveFormsBindingComponent],
})
export class ReactiveFormsBindingModule {}

// [formControl]="loginForm.get('username')" = formControlName="username"
