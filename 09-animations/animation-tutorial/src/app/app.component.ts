import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Animations</h1>

    <!-- <h2>Fade in out</h2>

    <app-fade-in-out></app-fade-in-out> -->

    <!-- <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <h1>
            Enter leave animation
          </h1>

          <app-enter-leave></app-enter-leave>
        </div>
      </div>
    </div> -->

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <h1>
            My dogs
          </h1>

          <app-list></app-list>
        </div>
      </div>
    </div>
  `,

})
export class AppComponent {
  title = 'animation-tutorial';
}
