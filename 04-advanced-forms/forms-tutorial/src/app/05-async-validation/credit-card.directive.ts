/**

<input ngModel creditCard />

 */

import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreditCardService } from './credit-card.service';

@Directive({
  selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: CreditCardDirective
    }
  ]
})
export class CreditCardDirective implements AsyncValidator {

  constructor(private _creditCard: CreditCardService) {}

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this._creditCard.isValidCreditCard(control.value).pipe(
      map((result: boolean) => {
        if (result) {
          return null;
        } else {
          return {
            creditCard: 'The credit card is not valid'
          }
        }
      })
    )
  }

}
