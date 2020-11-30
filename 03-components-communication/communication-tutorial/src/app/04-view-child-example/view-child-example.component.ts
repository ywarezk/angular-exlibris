import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TrvVideoPlayerExampleComponent } from '../03-trv-video-player-example/trv-video-player-example.component';

@Component({
  selector: 'app-view-child-example',
  template: `
    <p #pigletFullName>
      Pigletshvily Chaitovski {{age}}
    </p>
    <app-trv-video-player-example #videoPlayer="myVideoPlayer"></app-trv-video-player-example>
    <h1 innerText="{{stam}}">

    </h1>

    <p>
      {{ changeSomething() }}
    </p>

  `,
})
export class ViewChildExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer')
  videoPlayer: TrvVideoPlayerExampleComponent;

  @ViewChild(TrvVideoPlayerExampleComponent)
  videoPlayer1: TrvVideoPlayerExampleComponent;

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
