/**
 * run this service on node
 */

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserOnlyShimService {
  constructor(@Inject(DOCUMENT) private _document) {

  }

  getElementById(id: string) {
    return this._document.getElementById(id);
  }
}
