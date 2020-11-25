import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-example1',
  template: `
    <p>
      my name is {{firstName}} and my age is {{ age }}
    </p>
  `,
})
export class InputExample1Component implements OnInit, OnChanges {
  @Input()
  firstName: string;

  @Input('pigletAge')
  set age(value: number) {
    // react on changes in a certain input
    this._age = value
  }

  get age(): number {
    return this._age
  }

  private _age: number;

  constructor() {

  }

  /**
   * every time the input variables are changing ===
   * changing key in object will not invoke the onChanges
   */
  ngOnChanges(changes: SimpleChanges) {
    // place here some logic that happens when the input is changing
  }

  /**
   * input members will be initiated
   * called once
   * input init
   * server init
   *
   */
  ngOnInit(): void {
  }

}
