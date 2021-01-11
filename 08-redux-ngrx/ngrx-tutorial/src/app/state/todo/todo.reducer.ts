import { createReducer, on } from '@ngrx/store';
import { setTasks } from './todo.actions';
import { createEntityAdapter } from '@ngrx/entity';
import { Task } from '../../task.model';

const taskAdapter = createEntityAdapter<Task>();



export const todoReducer = createReducer(
  taskAdapter.getInitialState(),
  on(setTasks, (state, action) => taskAdapter.setAll(action.tasks, state))
)
