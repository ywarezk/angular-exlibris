/**

1. FormGroup
    FormControl - shoul select - null / admin / user


2. FormGroup
      FormControl - shoul select = admin
      FormControl - password

3. FormGroup
      FormControl - shoul select = user
      FormControl - firstName
      FormControl - lastName

   action
1 --------> 2
1 --------> 3

 */


import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="shoulForm">
      <select formControlName="role" >
        <option [value]="null">-----</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <input type="password" *ngIf="shoulForm.controls.password" [formControl]="shoulForm.controls.password" />

      <input type="text" *ngIf="shoulForm.controls.firstName" [formControl]="shoulForm.controls.firstName" />
      <input type="text" *ngIf="shoulForm.controls.lastName" [formControl]="shoulForm.controls.lastName" />

      {{ shoulForm.value | json }}
    </form>
  `,
})
export class DynamicFormComponent implements OnInit {
  shoulForm = this._formBuilder.group({
    role: null
  })

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.shoulForm.controls['role'].valueChanges.subscribe((userSelected: string) => {
      switch(userSelected) {
        case 'admin':
          this.shoulForm.addControl('password', this._formBuilder.control(''))
          this.shoulForm.removeControl('firstName');
          this.shoulForm.removeControl('lastName');
          break;
        case 'user':
          this.shoulForm.removeControl('password')
          this.shoulForm.addControl('firstName', this._formBuilder.control(''))
          this.shoulForm.addControl('lastName', this._formBuilder.control(''))
          break;
        default:
          this.shoulForm.removeControl('password');
          this.shoulForm.removeControl('firstName');
          this.shoulForm.removeControl('lastName');
      }
    })
  }

}

