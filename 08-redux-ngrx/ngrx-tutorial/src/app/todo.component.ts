import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-counter',
  template: `
    <h1>
      The number of todo items is:
    </h1>
  `,
})
export class TodoCounterComponent {
}

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li></li>
    </ul>
  `,
})
export class TodoListComponent {
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
