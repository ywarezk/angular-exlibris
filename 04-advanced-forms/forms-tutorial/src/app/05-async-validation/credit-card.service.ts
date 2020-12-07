import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  isValidCreditCard(creditCard: string): Observable<boolean> {
    return of(false).pipe(
      delay(500)
    );
  }
}
