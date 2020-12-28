/**
 * angular will help you write isomorphic code
 * function, service, injection token angular will supply that will help you write async code
 */

import { DOCUMENT, isPlatformBrowser, isPlatformServer, Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild ,
  PLATFORM_ID
} from '@angular/core';


@Component({
  selector: 'app-iso-help',
  template: `
    <h1 id="hello" #h1Container >
      Angular help with async code
    </h1>
  `,
})
export class IsoHelpComponent implements AfterViewInit {
  @ViewChild('h1Container', {read: ElementRef})
  h1Container: ElementRef<HTMLHeadingElement>;


  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _renderer: Renderer2,
    @Inject(PLATFORM_ID) private _platformId
  ) { }

  ngAfterViewInit() {
    // this._document.getElementById('hello').innerText = 'changing in ssr'
    const textElement = this._renderer.createText('changing in ssr');
    this._renderer.appendChild(this.h1Container.nativeElement, textElement);

    if (isPlatformBrowser(this._platformId)) {
      console.log('only the browser');
    }

    if (isPlatformServer(this._platformId)) {
      console.log('only the node');
    }
  }
}
