import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `
    <p>
      child works 2!
    </p>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
