import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputExample1Component } from './input-example1/input-example1.component';
import { OutputExample2Component } from './output-example2/output-example2.component';
import { TrvVideoPlayerExample3Component } from './trv-video-player-example3/trv-video-player-example3.component';
import { ViewChildExample4Component } from './view-child-example4/view-child-example4.component';
import { NgIfQuestionComponent } from './ng-if-question/ng-if-question.component';

@NgModule({
  declarations: [
    AppComponent,
    InputExample1Component,
    OutputExample2Component,
    TrvVideoPlayerExample3Component,
    ViewChildExample4Component,
    NgIfQuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
