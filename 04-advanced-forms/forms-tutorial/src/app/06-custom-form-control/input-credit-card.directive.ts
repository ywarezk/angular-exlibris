/**
Custom control
directive / component
that i can place formControl on ngModel

custom-control ------------------> ngModel
              <-------------------

<input (blur)="touchCB" type="creditCard" ngModel />

 */

import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input[type=creditCard][formControlName],input[type=creditCard][formControl],input[type=creditCard][ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputCreditCardDirective
    }
  ]
})
export class InputCreditCardDirective implements ControlValueAccessor {
  private _changeCb = (value: string) => {}
  private _touchCb = () => {}

  constructor(private _element: ElementRef) {}

  writeValue(newCreditCard: string): void {
    this._element.nativeElement.value = newCreditCard;
  }

  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this._touchCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._element.nativeElement.disabled = isDisabled;
  }

  @HostListener('input', ['$event.target.value'])
  userTypedText(value: string) {
    let counter = 0;
    if (value.length <= 4) {
      this._changeCb(value);
      return;
    }

    let result = '';
    while (counter + 4 < value.length) {
      result += value.substring(counter, counter + 4);
      result += '-';
      counter +=4;
    }
    this._element.nativeElement.value = result;
    this._changeCb(result);
  }

  @HostListener('blur')
  inputBlurred() {
    this._touchCb();
  }

 }
