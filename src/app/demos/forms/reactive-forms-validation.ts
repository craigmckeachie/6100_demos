import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-forms-validation',
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
  <br>
  <button>Sign In</button>
  </form>

  <h5>Form Values:</h5>
  <pre>{{loginForm.value | json}}</pre>

  <h5>Username Errors:</h5>
  <pre *ngIf="loginForm.get('username').invalid">
      {{ loginForm.get('username').errors | json }}
  </pre>

  <h5>Password rules:</h5>
  <ul>
    <li>min 6 characters, max 50 characters</li>
    <li>must contain 1 letter</li>
    <li> must contain 1 number</li>
    <li>may contain special characters</li>
  </ul>

  <h5>Password Errors:</h5>
  <pre *ngIf="loginForm.get('password').invalid">
      {{ loginForm.get('password').errors | json }}
  </pre>
  `,
})
export class ReactiveFormsValidationComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
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
  declarations: [ReactiveFormsValidationComponent],
})
export class ReactiveFormsValidationModule {}

// min 6 characters, max 50 characters
// must contain 1 letter
// must contain 1 number
// may contain special characters
