import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputExampleComponent } from './01-input-example/input-example.component';
import { OutputExampleComponent } from './02-output-example/output-example.component';
import { TrvVideoPlayerExampleComponent } from './03-trv-video-player-example/trv-video-player-example.component';
import { ViewChildExampleComponent } from './04-view-child-example/view-child-example.component';
import { NgIfQuestionComponent } from './ng-if-question/ng-if-question.component';
import { TemplateRefExampleComponent } from './05-template-ref/template-ref-example.component';
import { StructuralDirectivesExampleComponent } from './06-structural-directives/structural-directives-example.component';
import { WithUserDirective } from './06-structural-directives/with-user.directive';
import { NgContentExampleComponent } from './07-ng-content/ng-content-example.component';

@NgModule({
  declarations: [
    AppComponent,
    InputExampleComponent,
    OutputExampleComponent,
    TrvVideoPlayerExampleComponent,
    ViewChildExampleComponent,
    NgIfQuestionComponent,
    TemplateRefExampleComponent,
    StructuralDirectivesExampleComponent,
    WithUserDirective,
    NgContentExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
