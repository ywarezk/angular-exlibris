import { Directive } from '@angular/core';

@Directive({
  selector: '[diExample]',
  providers: [
    {
      provide: 'hello',
      useValue: 'hello from DiExampleDirective'
    }
  ]
})
export class DiExampleDirective { }
