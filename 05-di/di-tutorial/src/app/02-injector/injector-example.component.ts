import { Component, Injector, OnInit, Inject } from '@angular/core';
import { MessageService } from '../01-di-recap/message.service';

@Component({
  selector: 'app-injector-example',
  template: `
    <h1>
      {{ helloMessage }}
    </h1>
  `,
  providers: [
    {
      provide: 'hello',
      useValue: 'hello from InjectorExampleComponent'
    }
  ]
})
export class InjectorExampleComponent implements OnInit {
  constructor(
    private _injector: Injector,
    private _message: MessageService,
    @Inject('hello') public helloMessage: string
  ) { }

  ngOnInit(): void {
    this._injector.get<string>('hello' as any);
  }
}
