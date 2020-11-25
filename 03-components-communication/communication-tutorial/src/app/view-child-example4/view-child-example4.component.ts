import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TrvVideoPlayerExample3Component } from '../trv-video-player-example3/trv-video-player-example3.component';

@Component({
  selector: 'app-view-child-example4',
  template: `
    <p #pigletFullName>
      Pigletshvily Chaitovski {{age}}
    </p>
    <app-trv-video-player-example3 #videoPlayer="myVideoPlayer"></app-trv-video-player-example3>
    <h1 innerText="{{stam}}">

    </h1>

    <p>
      {{ changeSomething() }}
    </p>

  `,
})
export class ViewChildExample4Component implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer')
  videoPlayer: TrvVideoPlayerExample3Component;

  @ViewChild(TrvVideoPlayerExample3Component)
  videoPlayer1: TrvVideoPlayerExample3Component;

  @ViewChild('pigletFullName')
  pigletName: ElementRef;

  age: number = 7;

  stam: string = 'hello'

  constructor() { }

  ngOnInit(): void {
  }

  changeSomething() {
    // this.age = 10;
  }

  /**
   * jumps once
   * initialization logic
   * initialization that depends on ViewChild
   * initialization that depends on view to complete drawing
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this.age++;
    })

  }

}
