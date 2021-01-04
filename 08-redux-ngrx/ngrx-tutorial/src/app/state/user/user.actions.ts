import { createAction, props } from '@ngrx/store';

// action creator
// {type: '...', payload: newFirstName}
// (newFirstName) => ({type: '...', payload: newFirstName})
export const setFirstName = createAction(
  '[user] Set First Name',
  props<{ newFirstName: string }>()
)
