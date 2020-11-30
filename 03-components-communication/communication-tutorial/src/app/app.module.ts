import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputExampleComponent } from './01-input-example/input-example.component';
import { OutputExampleComponent } from './02-output-example/output-example.component';
import { TrvVideoPlayerExampleComponent } from './03-trv-video-player-example/trv-video-player-example.component';
import { ViewChildExampleComponent } from './04-view-child-example/view-child-example.component';
import { NgIfQuestionComponent } from './ng-if-question/ng-if-question.component';

@NgModule({
  declarations: [
    AppComponent,
    InputExampleComponent,
    OutputExampleComponent,
    TrvVideoPlayerExampleComponent,
    ViewChildExampleComponent,
    NgIfQuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
