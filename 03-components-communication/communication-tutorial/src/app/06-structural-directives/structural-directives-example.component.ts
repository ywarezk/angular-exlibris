import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-structural-directives-example',
  template: `
    <h1>Structural Directives</h1>

    <!--
      <ng-template [ngIf]="someCondition">
        <div>
          <h1>
            something is true here
          </h1>
        </div>
      </ng-template>
    -->
    <div *ngIf="someCondition">
      <h1>
        something is true here
      </h1>
    </div>

    <!--
      <ng-template ngFor let-todo [ngForOf]="someTodoList">
        <ul>
          <li>
            something is true here
          </li>
        </ul>
      </ng-template>
    -->
    <ul>
      <li *ngFor="let todo of someTodoList">
        {{todo}}
      </li>
    </ul>

    <header>

      <!--

        <h1 *withUser="let myUser">
          Hello {{myUser.firstName}}
        </h1>

      -->

      <!-- <h1 *ngIf="(user$ | async); else guest">
        Hello {{user$ | async}}
      </h1>
      <ng-template #guest>
        <h1>
          Hello guest
        </h1>
      </ng-template> -->

      <h1 *withUser="let user">
        {{user.firstName}} {{user.lastName}}
      </h1>

    </header>

  `,
})
export class StructuralDirectivesExampleComponent {
  someCondition = true;

  someTodoList = [
    'Walk with piglet & Sweetness',
    'belly rubs piglet & Sweetness'
  ]

  user$ = this._userService.user$;

  constructor(private _userService: UserService) {
    this._userService.user$.subscribe((user) => {

    })

    // ...unsubscribe
  }
}
