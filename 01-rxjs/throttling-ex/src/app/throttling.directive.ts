/**
<input (throttling)="sendSearchRequest($event)" />
 */

import { Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[throttling]'
})
export class ThrottlingDirective implements OnInit, OnDestroy {
  @Output('throttling')
  throttling: EventEmitter<string> = new EventEmitter();

  userTyping$: Subject<string> = new Subject();

  private _sub: Subscription | null = null;

  /**
   *
   * @param _element
   */
  /*constructor(
    private _element: ElementRef
  ) {
    fromEvent(this._element.nativeElement, 'input')
  }*/

  ngOnInit() {
    this._sub = this.userTyping$.pipe(
      debounceTime(1000)
    ).subscribe((whatTheUserTyped: string) => {
      this.throttling.emit(whatTheUserTyped);
    })
  }

  ngOnDestroy() {
    this._sub?.unsubscribe();
  }

  @HostListener('input', ['$event.target'])
  emitThrottling(input: HTMLInputElement) {
    this.userTyping$.next(input.value);
  }

}
