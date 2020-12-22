import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Change Detection {{sayHello()}}</h1>

    <app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }

  sayHello() {
    console.log('cd from AppComponent');
    // return Math.random();
  }
}


