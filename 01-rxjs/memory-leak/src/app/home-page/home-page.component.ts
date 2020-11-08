import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterEventsService } from '../router-events.service';

@Component({
  selector: 'app-home-page',
  template: `
    <h1>
      List of router events
    </h1>
    <ul>
      <li *ngFor="let item of events">
        {{ item }}
      </li>
    </ul>
  `
})
export class HomePageComponent implements OnInit {
  events: any[] = [];


  constructor(private _routerEvents: RouterEventsService) { }

  ngOnInit() {
    this._routerEvents.routerEvents.subscribe((e) => {
      this.events.push(e);
    })
  }
}
