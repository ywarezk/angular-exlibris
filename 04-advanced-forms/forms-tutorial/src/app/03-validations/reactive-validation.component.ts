import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { pigletValidate } from '../04-custom-validation/piglet.directive';


@Component({
  selector: 'app-reactive-validation',
  template: `
    <form [formGroup]="myEmailForm">
      <input
        formControlName="email"
        type="email"
        name="yourEmail"
        pattern="[0-9]+"
      />
    </form>
  `,
})
export class TemplateDrivenValidationComponent  {
  /*
  new FormGroup({
    email: new FormControl('yariv@nerdeez.com', [Validators.required, Validator.minLength(3), ])
  }, [])
  */
  myEmailForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.minLength(3), pigletValidate] ]
  })


  constructor(private _formBuilder: FormBuilder) {}
}
