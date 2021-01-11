import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FadeInOutComponent } from './01-fade-in-out/fade-in-out.component';
import { EnterLeaveComponent } from './02-enter-leave/enter-leave.component';
import { ListComponent } from './03-list-animation/list-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    FadeInOutComponent,
    EnterLeaveComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
