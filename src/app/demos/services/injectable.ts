import { Injectable, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class Logger {
  log(message) {
    console.log(message);
  }
}

@Injectable()
export class FruitService {
  private fruits = ['Apple', 'Orange', 'Plum'];

  constructor(private logger: Logger) {}

  getAll() {
    this.logger.log('gathering fruit');
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

  `
})
export class InjectableServiceComponent implements OnInit {
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
  declarations: [InjectableServiceComponent],
  providers: [FruitService, Logger]
})
export class InjectableServiceModule {}
