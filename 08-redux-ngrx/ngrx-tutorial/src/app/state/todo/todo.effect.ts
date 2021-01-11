import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { debounceTime, filter, map, mergeMap, take } from "rxjs/operators";
import { readTasks, setTasks } from './todo.actions';
import { TodoService } from '../../todo.service';


/**
 *

 -----A0-----A1-----A2----------------->


 S0---s1-----s2-----s3----------------->

 */

@Injectable({
  providedIn: 'root'
})
export class TodoEffect {

  initTasks$ = createEffect(() => {
    // Observable<{type: 'stam', payload}>
    return this._actions.pipe(
      ofType(readTasks),
      debounceTime(1000),
      mergeMap(() => {
        return this._todoService.getTasks()
      }),
      map((tasks) => {
        return setTasks({tasks});
      })
    )
  })

  constructor(private _actions: Actions, private _todoService: TodoService) {}

}
