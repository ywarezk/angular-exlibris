import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface TodoTask {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo',
  template: `
    <ul>
      <li *ngFor="let task of todoTasks$ | async">
        {{ task.title }}
      </li>
    </ul>
  `,
})
export class TodoComponent implements OnInit {
  todoTasks$: Observable<TodoTask[]>;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.todoTasks$ = this._http.get<TodoTask[]>('https://nztodo.herokuapp.com/api/tasks/?format=json');
  }
}
