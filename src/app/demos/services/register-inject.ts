import { Injectable, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class FruitService {
  private fruits = ['Apple', 'Orange', 'Plum'];

  getAll() {
    return of(this.fruits);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'register-inject-service',
  template: `
    <ul>
      <li *ngFor="let fruit of fruits">
          {{fruit}}
      </li>
    </ul>

  `,
  providers: [FruitService],
})
export class RegisterInjectServiceComponent implements OnInit {
  fruits: string[];

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitService.getAll().subscribe(data => {
      this.fruits = data;
    });
  }
}

// ========================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@NgModule({
  imports: [CommonModule],
  declarations: [RegisterInjectServiceComponent],
})
export class RegisterInjectServiceModule {}

// where to register? show registration at service component and module level: prefer service
