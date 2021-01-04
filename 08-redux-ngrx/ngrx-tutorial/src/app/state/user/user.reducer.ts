import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { setFirstName } from './user.actions';


// S0
export const userReducer = createReducer<UserState>(
  {
    firstName: 'Sweetness',
    lastName: 'fluffy belly'
  },
  on(setFirstName, (state, action) => {
    return {
      ...state,
      firstName: action.newFirstName
    }
  })
)
