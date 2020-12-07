import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto-create-form',
  template: `
    <form [formGroup]="shayDynamicForm">
      <formly-form
        [form]="shayDynamicForm"
        [fields]="fields"></formly-form>

      {{ shayDynamicForm.value | json }}
    </form>
  `,
})
export class AutoCreateFormComponent {
  shayDynamicForm = new FormGroup({

  });

  fields = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ]

}
