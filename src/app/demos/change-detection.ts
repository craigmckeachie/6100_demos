import {
  Component,
  DoCheck,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <div>
        <h1>Parent</h1>
        <p>Last Changed: {{lastChanged | date: 'medium'}}</p>
        <button (click)="onClick()" >Parent Button </button>
        <br><br>
        <child-a [nickname]="anickname">
        </child-a>
        <br>
        <child-b></child-b>
    </div>
    `,
  styles: [
    `
      div {
        border: 1px dashed;
        padding: 30px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements DoCheck {
  lastChanged: Date;
  anickname: string;

  ngDoCheck(): void {
    this.lastChanged = new Date();
  }

  onClick() {
    console.log('parent');
    this.anickname = 'nickname from parent';
  }
}

@Component({
  selector: 'child-a',
  template: `
    <div>
        <h1>Child A</h1>
        <p>Last Changed: {{lastChanged | date: 'medium'}}</p>
        <p>Nickname: {{nickname}}</p>
        <button (click)="onClick()" >Button A</button>
        <br><br>
        <grandchild-a></grandchild-a>

    </div>
    `,
  styles: [
    `
      div {
        border: 1px dashed;
        padding: 30px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildAComponent implements DoCheck {
  lastChanged: Date;
  @Input()
  nickname: string;

  ngDoCheck(): void {
    this.lastChanged = new Date();
  }

  onClick() {
    console.log('a');
    this.nickname = 'nickname from child a';
  }
}

@Component({
  selector: 'grandchild-a',
  template: `
    <div>
        <h1>Grand Child A</h1>
        <p>Last Changed: {{lastChanged | date: 'medium'}}</p>
        <p>Nickname: {{nickname}}</p>
        <button (click)="onClick($event)" >Button A</button>
    </div>
    `,
  styles: [
    `
      div {
        border: 1px dashed;
        padding: 30px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildAComponent implements DoCheck {
  lastChanged: Date;
  @Input()
  nickname: string;

  ngDoCheck(): void {
    this.lastChanged = new Date();
  }

  onClick(event) {
    event.preventDefault();
    console.log(' grandchild a');
  }
}

@Component({
  selector: 'child-b',
  template: `
    <div>
        <h1>Child B</h1>
        <p>Last Changed: {{lastChanged | date: 'medium'}}</p>
        <button (click)="onClick()" >Button B</button>
    </div>
    `,
  styles: [
    `
      div {
        border: 1px dashed;
        padding: 30px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildBComponent implements DoCheck {
  lastChanged: Date;

  ngDoCheck(): void {
    this.lastChanged = new Date();
  }

  onClick() {
    console.log('b');
  }
}

//an input "changes" then check child
//an async event happens in (button click) check current component and parents
//async in grandchild, all parents are checked
//if preventDefault still checks current component and parents
//setTimeout async event causes check of current component if change detection Default
//custom event doesn't cause check but check happens because always triggered by another async event..button click, setTimeout
//observable as input then next method causes component to be checked (even though not new object reference)

//when Default
//if triggered from parent (click, mouseover) then parent and child(ren) with updated input(s) checked
//if triggered from child (click) the child and parent (ancenstors) checked
