import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-example',
  template: `
    <h1>TemplateRef</h1>

    <ng-template #stam let-myUser="user" let-lastName>
      <h1>Something happened: {{myUser}} {{lastName}}</h1>
    </ng-template>

    <div *ngTemplateOutlet="stam; context: {user: 'Piglet', $implicit: 'Chaitovski'}">
    </div>

    <div *ngTemplateOutlet="stam; context: {user: 'Sweetness', $implicit: 'Fluffy Belly'}">
    </div>

    <div *ngTemplateOutlet="stam; context: {user: 'Yariv', $implicit: 'Katz'}">
    </div>
  `,
})
export class TemplateRefExampleComponent {

}
