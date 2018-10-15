# RxJS Demos

1.  This file is written in markdown so preview it as HTML for better formatting.

    - In VS Code: `right click` the file and choose `Open Preview`
    - In Webstorm: choose the `HTML Preview` tab at the bottom of the file

1.  In your Chrome browser navigate to:
    - Demos > RxJS > RxJS Demos and open DevTools (F12) and switch to the `console` tab
    - The output for the examples will show in the `console`.
1.  Open the file: `src\app\demos\rxjs\rxjs-demos.component.ts`
1.  Work with the instructor to copy & paste the code examples below into the `ngOnInit` method.

## Imports

These imports are already in the component ready for you to use.

```ts
import {
  Observable,
  Subject,
  Observer,
  from,
  of,
  fromEvent,
  interval
} from 'rxjs';
```

Observable, Observer, and Subject are core types, the rest are Observable (data sources, streams of data) creation methods.

```ts
//operators
import {
  map,
  filter,
  distinctUntilChanged,
  switchMap,
  debounceTime,
  throttleTime,
  tap
} from 'rxjs/operators';
```

Instance operators (methods) are passed to the pipe function and allow you to compose (transform, filter, aggregate etc..)
Observable streams of data.

## Creation

RxJS provides numerous creation methods.

```ts
of(1, 2, 3).subscribe(x => console.log(x));
```

```ts
from([1, 2, 3]).subscribe(x => console.log(x));
```

```ts
let button = document.querySelector('button');
fromEvent(button, 'click').subscribe(x => console.log(x));
```

```ts
let input = document.querySelector('input');
fromEvent(input, 'keyup').subscribe((x: Event) =>
  console.log((<HTMLInputElement>x.target).value)
);
```

### Unsubscribe

```ts
let subscription = interval(1000).subscribe(x => console.log(x));
setTimeout(() => subscription.unsubscribe(), 5000);
```

### Create Your Own Observable Data Source

```ts
Observable.create(internalObserver => {
  internalObserver.next('a');
  internalObserver.next('b');
}).subscribe(x => console.log(x));
```

# Observer

```ts
let observer: Observer<any> = {
  next: x => console.log(x),
  complete: () => console.log('completed'),
  error: x => console.log(x)
};
```

Demo 1:

```ts
of(1, 2, 3).subscribe(observer);
```

Demo 2:

```ts
Observable.create(internalObserver => {
  internalObserver.next('a');
  internalObserver.next('b');
  internalObserver.complete();
  // internalObserver.error('500 internal server error')
}).subscribe(observer);
```

# Operators

### Observer

```ts
let observer: Observer<any> = {
  next: x => console.log(x),
  complete: () => console.log('completed'),
  error: x => console.log(x)
};
```

### map

```ts
of(1, 2, 3)
  .pipe(map(x => x * 10))
  .subscribe(observer);
```

```ts
of(1, 2, 3)
  .pipe(map(x => x + '!'))
  .subscribe(observer);
```

### filter

```ts
//filter can return fewer items than in source
of(1, 2, 3, 4, 5, 6, 7, 8)
  .pipe(filter(x => x % 2 == 0))
  .subscribe(observer);
```

### throttleTime

```ts
interval(1000)
  .pipe(throttleTime(4000))
  .subscribe(observer);
```

```ts
interval(1000)
  .pipe(
    tap(x => console.log('No throttling ' + x)),
    throttleTime(4000)
  )
  .subscribe(observer);
```

### switchMap

```ts
let button = document.querySelector('button');
// Rerun an interval Observable on every click event
//cancels the inner 'click' observable and starts a new observable that runs on a one second interval
let clicks = fromEvent(button, 'click');
let result = clicks.pipe(switchMap(ev => interval(1000)));
result.subscribe(x => console.log(x));
```

```ts
let obs1$ = of(1, 2, 3);
let obs2$ = of('a', 'b');

obs1$.pipe(switchMap(() => obs2$)).subscribe(observer);
// a, b, a, b, a, b, completed
```

```ts
let obs1$ = of(1, 2, 3);
let obs2$ = of('a', 'b');

obs1$.pipe(switchMap(() => obs2$, (n, l) => n + l)).subscribe(observer);
//1a, 1b, 2a, 2b, 3a, 3b
```

### distinctUntilChanged

```ts
of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
  .pipe(distinctUntilChanged())
  .subscribe(x => console.log(x));
```

### Combine Operators:

debounceTime, distinctUntilChanged, map

```ts
let input = document.querySelector('input');
fromEvent(input, 'keyup')
  .pipe(
    debounceTime(500),
    map((x: Event) => (<HTMLInputElement>x.target).value),
    distinctUntilChanged()
  )
  .subscribe(x => console.log(x));
```

# Subject

A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

```ts
var subject = new Subject();

subject.subscribe({
  next: v => console.log('observerA: ' + v)
});
subject.subscribe({
  next: v => console.log('observerB: ' + v)
});

subject.next(1);
subject.next(2);
```

# Example of practical application

Below is example code that demonstrates a practical application of RxJS.
_Note this code is an excerpt of a larger application and will not run if copied into `main.ts`._

```ts
this.items = this.searchTermStream.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((term: string) => this.wikipediaService.search(term))
);
```

- debounceTime waits for the user to stop typing for at least 300 milliseconds.
- distinctUntilChanged ensures that the service is called only when the new search term is different from the previous search term.
- switchMap calls the WikipediaService with a fresh, debounced search term and coordinates the stream(s) of service response.

Reference: https://v2.angular.io/docs/ts/latest/guide/server-communication.html#!#wikicomponent
