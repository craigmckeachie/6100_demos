import { Component, OnInit } from '@angular/core';

// core types and creation operators
import {
  Observable,
  Subject,
  Observer,
  from,
  of,
  fromEvent,
  interval
} from 'rxjs';

// operators
import {
  map,
  filter,
  distinctUntilChanged,
  switchMap,
  debounceTime,
  throttleTime,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'rxjs-demos',
  template: `
    <p>Open developer tools to see logged messages.</p>
    <button>Click me.</button>

    <br>
    <br>

    <input type="text">
  `
})
export class RxJSDemosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const button = document.querySelector('button');
    fromEvent(button, 'click').subscribe(x => console.log(x));
  }
}
