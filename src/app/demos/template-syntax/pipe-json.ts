import { Component } from '@angular/core';

@Component({
  selector: 'json-pipe',
  template: `<div>
    <p>Without JSON pipe:</p>
    <pre>{{object}}</pre>
    <p>With JSON pipe (no pre tag):</p>
    <p>{{object | json}}</p>
    <p>With JSON pipe (and pre tag):</p>
    <pre>{{object | json}}</pre>
  </div>`,
})
export class JsonPipeComponent {
  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
}
