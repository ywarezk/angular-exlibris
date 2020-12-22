import 'zone.js';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Component, OnInit } from '@angular/core';
import { renderModule, ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-hello',
  template: `
    <h1>
      hello world
    </h1>
  `,
})
export class HelloComponent{
}


@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    ServerModule,
    BrowserModule.withServerTransition({appId: 'hello'})
  ],
  exports: [],
  providers: [],
  bootstrap: [HelloComponent]
})
export class HelloModule {}

renderModule(HelloModule, {
  document: `
    <app-hello></app-hello>
  `
}).then((html: string) => {
  console.log(html);
})
