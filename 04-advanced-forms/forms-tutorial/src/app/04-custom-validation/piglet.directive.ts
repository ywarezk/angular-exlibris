import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validator, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

export function pigletCreator(dogNames: string[]): ValidatorFn {
  return (control: FormControl) => {
    const foundDog = dogNames.find((dogName: string) => dogName === control.value);
    if (!foundDog) {
      return {
        piglet: 'this is not equal to array of dog names'
      }
    }
    return null
  }
}

@Directive({
  selector:
    '[piglet][formControlName],[piglet][formControl],[piglet][ngModel]',
  providers: [
    // tell angular that this is a validation directive
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PigletDirective
    }
  ]
})
export class PigletDirective implements Validator {
  @Input('piglet')
  dogNames: string[] = ['pigletshvily'];

  /**
   *
   * @param control
   * @returns {piglet: 'this is not equal to pigletshvily'}
   */
  validate(control: FormControl): ValidationErrors {
    return pigletCreator(this.dogNames)(control);
  }

}
