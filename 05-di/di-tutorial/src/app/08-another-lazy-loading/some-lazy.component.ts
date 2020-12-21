import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-lazy',
  template: `
    <h1>
      This is loaded lazily
    </h1>
  `,
})
export class SomeLazyComponent {
}
