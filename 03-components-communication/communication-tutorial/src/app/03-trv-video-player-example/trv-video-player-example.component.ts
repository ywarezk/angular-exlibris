import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trv-video-player-example',
  template: `
    <p>
      trv-video-player-example3 works!
    </p>
  `,
  exportAs: "myVideoPlayer"
})
export class TrvVideoPlayerExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  play(videoUrl: string) {

  }

  forward(numOfFrames: number, logToPrint: string, isLog: boolean) {

  }

}
