import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { TrvVideoPlayerExample3Component } from '../trv-video-player-example3/trv-video-player-example3.component';

@Component({
  selector: 'app-ng-if-question',
  template: `
    <p>
      ng-if-question works!
    </p>
    <div *ngIf="someCondition">
      <app-trv-video-player-example3 #videoPlayer></app-trv-video-player-example3>
    </div>

  `,
})
export class NgIfQuestionComponent implements AfterViewChecked, OnInit {

  @ViewChild('videoPlayer', {static: false})
  videoPlayer: TrvVideoPlayerExample3Component;

  constructor() { }

  someCondition = false;

  ngOnInit() {
    setTimeout(() => {
      console.log('timer is running');
      this.someCondition = true;
    }, 3000);
  }

  ngAfterViewChecked() {
    console.log(this.videoPlayer);
  }
}
