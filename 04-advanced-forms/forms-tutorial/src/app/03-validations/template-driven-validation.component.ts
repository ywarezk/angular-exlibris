import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-validation',
  template: `
    <form #myform="ngForm">
      <input
        type="email"
        name="yourEmail"
        piglet
        ngModel
        #myModel="ngModel"
      />
      {{ myModel.errors | json}}
    </form>
  `,
})
export class TemplateDrivenValidationComponent  {

}
