import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, from } from 'rxjs';

/*
of([1,2,3]);
from([1,2,3])
*/

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  search(searchStr: string) {
    return this._http.get(`https://nztodo.herokuapp.com/api/tasks/?format=json&search=${searchStr}`).pipe(
      catchError(() => {
        return of([]);
      })
    )
  }
}
