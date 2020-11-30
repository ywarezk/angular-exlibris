import { Observable } from 'rxjs';

import { InjectionToken } from '@angular/core';

export const DATA_STRATEGY = new InjectionToken<DataStrategy>('this is for my strategy pattern');

export abstract class DataStrategy {
  abstract fetch(): Observable<any[]>;
}
