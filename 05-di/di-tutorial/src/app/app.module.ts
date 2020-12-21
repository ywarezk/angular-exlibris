import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageService } from './01-di-recap/message.service';
import { InjectorExampleComponent } from './02-injector/injector-example.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './01-di-recap/hello.component';
import { GenericModule } from './06-generic-library/generic.module';
import { GENERIC_CONFIG } from './06-generic-library/token';

@NgModule({
  declarations: [
    AppComponent,
    InjectorExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HelloComponent},
      { path: 'settings', loadChildren: async function() {
          const moduleFile = await import('../app/03-injector-trees/lazy.module');
          return moduleFile.LazyModule;
      } }
    ]),
    GenericModule.create('https://nztodo.herokuapp.com/api/tasks?format=json')
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   // ...
    // },
    {
      provide: 'hello',
      useValue: 'hello from injector'
    },
    // MessageService
    {
      provide: MessageService,
      useClass: MessageService
    },
    {
      provide: GENERIC_CONFIG,
      useValue: 'https://...'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
