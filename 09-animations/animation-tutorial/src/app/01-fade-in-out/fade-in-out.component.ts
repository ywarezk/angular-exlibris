import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

/*
opacity: 1


opacity: 0
*/

/**
 *

 state Visible opacity: 1


 state InVisible opacity: 0


 */


@Component({
  selector: 'app-fade-in-out',
  template: `
    <div>
      <h1 [@fadeInOut]="isVisible ? 'visible' : 'invisible'">
        Fade in out
      </h1>
      <button (click)="isVisible = !isVisible">
        Toggle visibility
      </button>
    </div>
  `,
  animations: [
    trigger('fadeInOut', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('visible <=> invisible', animate('1s ease-in-out'))
    ])
  ]
})
export class FadeInOutComponent {
  isVisible = true;
}
