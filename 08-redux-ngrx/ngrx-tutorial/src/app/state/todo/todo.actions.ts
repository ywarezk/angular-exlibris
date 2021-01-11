import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/task.model';

export const readTasks = createAction(
  '[todo] Read Tasks'
)

export const setTasks = createAction(
  '[todo] Set Tasks',
  props<{tasks: Task[]}>()
)
