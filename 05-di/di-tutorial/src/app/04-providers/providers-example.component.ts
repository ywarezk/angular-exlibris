import { HttpClient } from '@angular/common/http';
import { Component, inject, Injector, OnInit } from '@angular/core';
// import { inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name',
  template: `<input required /> `,
  providers: [
    // injector
    // how to create the key foo
    {
      provide: 'foo',
      // useClass: StamService
      // useValue: ['provide', 'value', 'that is not instance']
      // deps: [HttpClient, FormBuilder],
      // useFactory: () => {
      //   // const httpClient = inject(HttpClient)
      //   return 10;
      // }
      multi: true,
      useExisting: StamService
    },

    // key: Logger  value: new Logger2()
    // key: Logger2  value: new Logger2()
    {
      provide: Logger,
      // useClass: Logger2,
      useExisting: Logger2
    },
    {
      provide: Logger2,
      useClass: Logger2
    }
    // StamService
  ]
})
export class NameComponent implements OnInit {
  constructor(private _logger: Logger, private _injector: Injector, ) {
    // inject()

  }

  ngOnInit(): void { }
}
