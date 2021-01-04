import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from './state/app.state';
import { firstNameSelector } from './state/user/user.selectors';

@Component({
  selector: 'app-root',
  template: `
    <h1>NGRX</h1>

    <h2>Read State</h2>

    <p>hello {{firstName$ | async}}</p>

    <nav>
      <ul>
        <li>
          <a routerLink="/">Home</a>
        </li>
        <li>
          <a routerLink="/todo">Todo</a>
        </li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  firstName$: Observable<string> = this._store.select(firstNameSelector)

  constructor(private _store: Store<AppState>) {}

}
