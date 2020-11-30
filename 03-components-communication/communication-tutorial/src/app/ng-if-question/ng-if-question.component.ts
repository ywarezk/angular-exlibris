import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { TrvVideoPlayerExampleComponent } from '../03-trv-video-player-example/trv-video-player-example.component';

@Component({
  selector: 'app-ng-if-question',
  template: `
    <p>
      ng-if-question works!
    </p>
    <div *ngIf="someCondition">
      <app-trv-video-player-example #videoPlayer></app-trv-video-player-example>
    </div>

  `,
})
export class NgIfQuestionComponent implements AfterViewChecked, OnInit {

  @ViewChild('videoPlayer', {static: false})
  videoPlayer: TrvVideoPlayerExampleComponent;

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
