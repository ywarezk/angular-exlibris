import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FirstNameComponent } from './first-name.component';
import { TodoComponent, TodoCounterComponent, TodoListComponent } from './todo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
      user: userReducer
    }),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot([
      {path: '', component: FirstNameComponent},
      { path: 'todo', component: TodoComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
