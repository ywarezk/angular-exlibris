import { Component, Inject, OnInit } from '@angular/core';
import { AUTHENTICATE, AuthenticateStrategy } from './authenticate-strategy';

@Component({
  selector: 'app-name',
  template: ``,
  styles: [``]
})
export class NameComponent implements OnInit {
  constructor(@Inject(AUTHENTICATE) strategy: AuthenticateStrategy) { }

  ngOnInit(): void { }
}
