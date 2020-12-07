import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-validate-form',
  template: `
    <form>
      <input
        type="text"
        name="creditCard"
        [ngModelOptions]="{updateOn: 'blur'}"
        ngModel
        minlength="3"
        #creditCardNgModel="ngModel"
        creditCard />

        {{ creditCardNgModel.errors | json }}
    </form>
  `,
})
export class AsyncValidateFormComponent {

}
