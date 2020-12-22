import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// ChangeDetectorRef - stop being obssesed about cleaning

// automatic CD - disable

// you need to tell the component when they are dirty.

@Component({
  selector: 'app-child',
  template: `
    <h1 (click)="something()">Child component {{sayHello()}} {{counter$ | async}}</h1>

    <app-grand [message]="msg"></app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  counter$: BehaviorSubject<number> = new BehaviorSubject(0);

  counter = 0;
  msg = 'hello world';

  constructor(private _cd: ChangeDetectorRef) {}

  ngOnInit() {

    // will not trigger cd when on push
    setTimeout(() => {
      console.log('timer is running in child');
      // this._cd.detectChanges();
      // this._cd.markForCheck();

      // this.counter++;
      this.counter$.next(this.counter$.value + 1);
    }, 1000);

    // observable / promise
    // ajax
  }

  sayHello() {
    console.log('cd from ChildComponent');
  }

  something() {
    console.log('events will trigger cd');
    this.msg = 'foo bar';
  }
}
