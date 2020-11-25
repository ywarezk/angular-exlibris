/**
 * Interceptor
 *
 * - Angular Service
 * - implements interface

 httpClient.get(...) ----+----+-----+-------> sending request
 httpClient.get(...) <---+----+-----+----+---+----+---+-- response
 */

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // piglet.exlibris.com
    // exlisbris.com
    // localStorage.setItem('token', 'adsfasdfadsf234234sfdxcv');

    // cookies
    // CSRF
    // https only
    // javascript cant access

    if (!localStorage.getItem('token')) {
      return next.handle(req);
    }

    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    });

    return next.handle(newReq).pipe(
      tap((event: HttpEvent<any>) => {

      })
    )

  }

}
