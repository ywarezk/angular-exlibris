import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let dog of myCuteDogs">
        <h1>
          {{ dog }}
        </h1>
        <button>
          X
        </button>
      </li>
    </ul>

  `,
})
export class ListComponent {

  myCuteDogs = [
    'Pigletshvily',
    'Sweetness'
  ]

}
