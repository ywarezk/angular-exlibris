import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FirstNameComponent } from './first-name.component';
import { TodoComponent, TodoCounterComponent, TodoListComponent } from './todo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffect } from './state/todo/todo.effect';
import { todoReducer } from './state/todo/todo.reducer';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';

@NgModule({
  declarations: [
    AppComponent,
    FirstNameComponent,
    TodoComponent,
    TodoCounterComponent, TodoListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user: userReducer,
      router: routerReducer,
      todo: todoReducer
    }),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot([
      {path: '', component: FirstNameComponent},
      { path: 'todo', component: TodoComponent}
    ]),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      TodoEffect
    ]),
    EntityDataModule.forRoot({
      entityMetadata: {
        Task: {}
      }
    })
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: {
      root: 'http://nztodo.herokuapp.com/api/'
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
