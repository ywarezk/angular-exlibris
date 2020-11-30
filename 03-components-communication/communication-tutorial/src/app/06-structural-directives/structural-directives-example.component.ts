import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives-example',
  template: `
    <h1>Structural Directives</h1>

    <div *ngIf="someCondition">
      <h1>
        something is true here
      </h1>
    </div>

    <ul>
      <li *ngFor="let todo of someTodoList">
        {{todo}}
      </li>
    </ul>

  `,
})
export class StructuralDirectivesExampleComponent {
  someCondition = true;

  someTodoList = [
    'Walk with piglet & Sweetness',
    'belly rubs piglet & Sweetness'
  ]
}
