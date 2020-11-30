import { Component, Inject, OnInit } from '@angular/core';
import { DataStrategy, DATA_STRATEGY } from './data.strategy';

@Component({
  selector: 'app-table',
  template: ``,
  styles: [``]
})
export class TableComponent implements OnInit {
  constructor(
    @Inject(DATA_STRATEGY) private _dataService: DataStrategy
  ) { }

  ngOnInit(): void { }
}
