/**

<app-custom-control ngModel></app-custom-control>

 */

import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-custom-control',
  template: ``,
})
export class NameComponent implements ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
