import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `

  `
})
export class NameComponent implements OnInit {
  constructor(
    @Optional() private _http: HttpClient
  ) { }

  ngOnInit(): void { }
}
