import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-demo',
  template: `
  <div *ngIf="isSignedIn; else signedOut">
  Welcome back, friend.
  <a href="#" (click)="signOut($event)" >Sign Out</a>
  </div>

<ng-template #signedOut>
  <input type="text" placeholder="username">
  <input type="text" placeholder="password">
  <a href="#" (click)="signIn($event)" >Sign In</a>
  <p>No username or password needed just click Sign In.</p>
</ng-template>
  `,
})
export class NgIfComponent {
  isSignedIn = false;
  signIn(event) {
    event.preventDefault();
    this.isSignedIn = true;
  }
  signOut() {
    event.preventDefault();
    this.isSignedIn = false;
  }
}
