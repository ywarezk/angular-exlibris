import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { readTasks } from './state/todo/todo.actions';
import { EntityCollectionService, EntityCollectionServiceFactory, EntitySelectorsFactory } from '@ngrx/data';
import { Task } from './task.model';
import { EntitySelectors } from '@ngrx/entity/src/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-counter',
  template: `
    <h1>
      The number of todo items is:
    </h1>
  `,
})
export class TodoCounterComponent implements OnInit {
  private _todoService: EntityCollectionService<Task>;

  constructor(entiryCollectionServiceFactory: EntityCollectionServiceFactory ) {
    this._todoService = entiryCollectionServiceFactory.create('Task');
  }

  ngOnInit() {
    this._todoService.getAll();
    // this._store.dispatch(readTasks());
  }
}

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task.title}}
      </li>
    </ul>
  `,
})
export class TodoListComponent implements OnInit {
  private _todoService: EntityCollectionService<Task>;
  tasks$: Observable<Task[]>;

  constructor(
    entiryCollectionServiceFactory: EntityCollectionServiceFactory,
    selectorFactory: EntitySelectorsFactory,
    private _store: Store
  ) {
    this._todoService = entiryCollectionServiceFactory.create('Task');

    const _entitySelector = selectorFactory.create<Task>('Task');
    this.tasks$ = this._store.select(_entitySelector.selectEntities);

  }

  ngOnInit() {
    this._todoService.getAll();
    // this._store.dispatch(readTasks());
  }
}


@Component({
  selector: 'app-todo',
  template: `
    <h1>
      Todo list
    </h1>
    <app-todo-counter></app-todo-counter>
    <app-todo-list></app-todo-list>
  `,
})
export class TodoComponent {
}
