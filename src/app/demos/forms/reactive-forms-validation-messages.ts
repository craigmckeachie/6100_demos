import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-forms-validation-messages',
  template: `
  <form [formGroup]="loginForm" (submit)="onSubmit()">
  <input type="text"
    formControlName="username"
    placeholder="username">
  <br>

  <div *ngIf="loginForm.get('username').invalid && loginForm.get('username').dirty ">
  <!--Move these two inner divs inside and outside of outer div to demonstrate why outer div is needed-->
    <div *ngIf="loginForm.get('username').hasError('required')">
      Username is required.
    </div>
    <div *ngIf="loginForm.get('username').hasError('minlength')">
      Username must be at least 3 characters long.
    </div>
  </div>

  <br>
  <input type="password"
    formControlName="password"
    placeholder="password">
  <br>
  <button>Sign In</button>
  </form>

  `,
})
export class ReactiveFormsValidationMessagesComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl('', [
          Validators.minLength(3),
          Validators.required,
        ]),
        password: new FormControl(
          null,
          Validators.pattern(
            '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$'
          )
        ),
      },
      { updateOn: 'blur' }
    );
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
  declarations: [ReactiveFormsValidationMessagesComponent],
})
export class ReactiveFormsValidationMessagesModule {}
