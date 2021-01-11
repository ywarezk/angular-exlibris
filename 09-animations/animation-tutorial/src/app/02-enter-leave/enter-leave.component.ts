import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-enter-leave',
  template: `
    <div>
      <h1 @slide *ngIf="isVisible">
        Fade in out
      </h1>
      <button (click)="isVisible = !isVisible">
        Toggle visibility
      </button>
    </div>
  `,
  animations: [
    trigger('slide', [
      // state('void', style({
      //   transform: 'translateX(-100%)',
      //   opacity: 0
      // })),
      // state('*', style({
      //   transform: 'translateX(0)',
      //   opacity: 1
      // })),
      transition(':enter', animate('1s ease-out', keyframes([
        style(
          {
            transform: 'translateX(-100%)',
            opacity: 0
          }
        ),
        style(
          {
            transform: 'translateX(0)',
            opacity: 1
          }
        ),
      ]))),
      transition(':leave', animate('1s ease-out', keyframes([
        style(
          {
            transform: 'translateX(0)',
            opacity: 1
          }
        ),
        style(
          {
            transform: 'translateX(100%)',
            opacity: 0
          }
        ),
      ])))
    ])
  ]
})
export class EnterLeaveComponent {
  isVisible = true;
}
