import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <input type="search" (throttling)="sendSearchRequest($event)" />
    </form>

    <ul>
      <li *ngFor="let item of todoItems$ | async">
        {{ item.title }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  todoItems$: Observable<any> | null = null;

  constructor(private _todoService: TodoService) {}

  sendSearchRequest(searchStr: string) {
    this.todoItems$ = this._todoService.search(searchStr);
  }

}
