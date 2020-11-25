import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foo';

  dogUser = {
    firstName: 'Pigletshvily',
    lastName: 'Chaitovski',
  }

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('https://nztodo.herokuapp.com/api/tasks/?format=json').subscribe();
  }
}
