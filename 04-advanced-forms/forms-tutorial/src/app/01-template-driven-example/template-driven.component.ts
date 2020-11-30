import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


/**
 *
 FormGroup
   FormControl
   FormControl
   FormControl
 */


@Component({
  selector: 'app-template-driven',
  template: `
    <form #myForm="ngForm" (ngSubmit)="handleSubmit(myForm)">
      <input
        type="text"
        name="dogName"
        ngModel
      />
    </form>
  `,
})
export class TemplateDrivenComponent{
  // { dogName: '...' }
  handleSubmit(form: NgForm) {
    console.log(form.value);
  }
}
