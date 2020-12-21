import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Homepage</h1>
  `,
})
export class HelloComponent {
  constructor(
    private _message: MessageService
  ) {
    // const new stam = new Stam()
    // const http = new HttpClient(stam)
    // const message = new MessageService(http);
  }
}
