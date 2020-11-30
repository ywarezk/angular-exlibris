import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-example',
  template: `
    <form [formGroup]="nameForm">
      <input
        formControlName="dogName"
        type="text"
        name="dogName"
      />
    </form>
  `,
})
export class ReactiveExampleComponent{
  nameForm = new FormGroup({
    dogName: new FormControl()
  })
}
