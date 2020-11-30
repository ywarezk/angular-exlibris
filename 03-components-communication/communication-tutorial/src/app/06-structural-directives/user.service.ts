import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  firstName: string,
  lastName: string
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = new BehaviorSubject({
    firstName: 'Pigletshvily',
    lastName: 'Chaitovski'
  })
}
