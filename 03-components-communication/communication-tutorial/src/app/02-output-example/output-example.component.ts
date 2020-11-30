/**
<app-output-example2 [(piglet)]="" ></app-output-example2>
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-example',
  template: `
    <p>
      output-example2 works!
    </p>
    <button (click)="hello.emit('hello from child')">
      send message to parent
    </button>
    <!--
      <input [(ngModel)]="someVar" />
    -->
  `,
})
export class OutputExampleComponent implements OnInit {
  // $event
  @Output('buttonClicked')
  hello: EventEmitter<string> = new EventEmitter();

  @Input('piglet')
  someVar: string;

  @Output('pigletChange')
  someEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
