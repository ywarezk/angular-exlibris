import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

// ChangeDetectorRef - stop listening to zone.js
// I will tell you when you are dirty.

@Component({
  selector: 'app-grand',
  template: `
    <h1>Grand component {{sayHello()}}</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent {
  @Input()
  message: string;

  sayHello() {
    console.log('cd from GrandComponent');
  }
}
