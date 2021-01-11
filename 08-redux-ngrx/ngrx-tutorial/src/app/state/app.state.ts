import { TodoState } from "./todo/todo.state";
import { UserState } from "./user/user.state";


/*
state = {
  user: {
    firstName: ...
    lastName: ...
  },
  todo: {
    tasks: []
  }
}
*/

export interface AppState {
  user: UserState,
  todo: TodoState
}
