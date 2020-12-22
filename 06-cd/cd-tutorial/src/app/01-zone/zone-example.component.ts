import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: ``,
})
export class NameComponent implements OnInit {
  constructor(private _zone: NgZone) {

    // useful to know when there are no pending tasks
    this._zone.onStable.subscribe(() => {

    });

    this._zone.run(() => {

    });

    this._zone.runOutsideAngular(() => {

    })


  }

  ngOnInit(): void { }
}
