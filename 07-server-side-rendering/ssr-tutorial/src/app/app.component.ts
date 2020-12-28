import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-todo></app-todo>
  `,
})
export class AppComponent implements OnInit {
  title = 'ssr-tutorial';

  ngOnInit() {
    // document.getElementById('stam').innerText = 'hello world';
  }
}
