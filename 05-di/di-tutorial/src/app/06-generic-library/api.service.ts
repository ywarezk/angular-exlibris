import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { GENERIC_CONFIG } from './token';

@Injectable()
export class ApiService {
  // url: string;

  // constructor(private _api: ApiService) {}

  constructor(
    private _http: HttpClient,
    @Inject(GENERIC_CONFIG) private _url: string
  ) {}

  // todo
  // auth
  fetch() {
    return this._http.get(this._url);
  }

  update(url: string) {
    // return this._http.put('');
  }

  insert(url: string) {
    // return this._http.post('');
  }

}
