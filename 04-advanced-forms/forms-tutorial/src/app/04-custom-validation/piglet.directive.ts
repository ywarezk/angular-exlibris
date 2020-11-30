import { Directive } from '@angular/core';

@Directive({
  selector:
    '[piglet][formControlName],[piglet][formControl],[piglet][ngModel]',
})
export class NameDirective { }
