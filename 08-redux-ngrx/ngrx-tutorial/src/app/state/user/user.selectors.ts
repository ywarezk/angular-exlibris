/**
 * grab from the state the part that im interested in
 */

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from './user.state';

// first name
export const firstNameSelector = createSelector<AppState, UserState, string>(
  (state) => state.user,
  (userState: UserState) => userState.firstName
)

// full name
export const fullNameSelector = createSelector<AppState, string, string, string>(
  (state) => state.user.firstName,
  (state) => state.user.lastName,
  (firstName, lastName) =>  firstName + ' ' + lastName
)
