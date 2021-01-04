import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFirstName } from './state/user/user.actions';

@Component({
  selector: 'app-first-name',
  template: `
    <form (submit)="changeFirstName($event)">
      <input placeholder="enter first name" (input)="newFirstName=$event.target.value" />
      <button type="submit">Submit</button>
    </form>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstNameComponent {
  newFirstName = '';

  changeFirstName(event) {
    event.preventDefault();

    this._store.dispatch(setFirstName({ newFirstName: this.newFirstName}));
  }

  constructor(private _store: Store) {}

}
