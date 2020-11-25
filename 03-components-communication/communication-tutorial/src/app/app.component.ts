import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'communication-tutorial';

  age = 7;

  helloWorld(message: string) {
    console.log(message);
  }
}
