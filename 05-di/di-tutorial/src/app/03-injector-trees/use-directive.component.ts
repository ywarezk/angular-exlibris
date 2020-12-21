import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';

// <app-use-directive injector>
@Component({
  selector: 'app-use-directive',
  template: `
    <h1>Settings screen</h1>
    <p>
      This screen should only be download when the user navigates to the settings
      screen
    </p>
    <!-- injector -->
    <span diExample ></span>

    <!-- injector -->
    <!-- key: NG_VALIDATORS, value: useExisiting, multi: true  -->
    <!-- <input type="text" [(ngModel)]="value" required minlength="5" /> -->
  `,
  providers: [{
    provide: 'hello',
    useValue: 'hello from UseDirectiveComponent'
  }]
})
export class UseDirectiveComponent implements OnInit {
  value = 'hello';

  constructor(
    @Optional() private _http: HttpClient
  ) { }

  ngOnInit(): void { }
}
