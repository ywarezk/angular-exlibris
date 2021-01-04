import { TodoState } from "./todo/todo.state";
import { UserState } from "./user/user.state";


export interface AppState {
  user: UserState,
  todo: TodoState
}
