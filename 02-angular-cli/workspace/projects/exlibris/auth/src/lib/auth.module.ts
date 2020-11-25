import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    // HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
