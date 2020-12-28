import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule ,
    AppModule,
    LottieModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
