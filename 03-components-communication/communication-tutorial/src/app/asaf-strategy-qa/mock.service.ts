import { Injectable } from "@angular/core";
import { of } from 'rxjs';
import { DataStrategy } from './data.strategy';

@Injectable({
  providedIn: 'root'
})
export class MockService extends DataStrategy {
  fetch() {
    return of([])
  }
}
