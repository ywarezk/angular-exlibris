import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserOnlyService {
  getElementById(id: string) {
    return document.getElementById(id);
  }
}
