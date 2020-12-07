import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <form>
      <!-- <input type="text" [(ngModel)]="someValue" /> -->

      <input type="creditCard" name="creditCard" ngModel #creditNgModel="ngModel" />
      {{ creditNgModel.value }}

      <!-- <input type="cities" name="cities" ngModel />

      052-1234567
      <exlibris-phone ngModel creditCard ></exlibris-phone>

      {city: {id: 1, name: 'tel aviv'},  address: 'my address 8' }
      <exlibris-address ngModel required piglet ></exlibris-address> -->
    </form>
  `,
})
export class SimpleFormComponent {
  someValue = 'hello'
}
