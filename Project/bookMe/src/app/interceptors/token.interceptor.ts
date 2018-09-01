import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import makeAuth from '../services/kinveyConfig'
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('authtoken');
    let auth;
    if (request.method === 'POST' && !token) {
      auth = makeAuth('basic')
    } else {
      auth = token !== null ? makeAuth('kinvey') : makeAuth('master')
    }

    request = request.clone({
      setHeaders: {
        "Authorization": auth,
        "Content-type": 'application/json'
      }
    });
    return next.handle(request);
  }
}