import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpInterceptor,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable,throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastrService:ToastrService){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((err) => {
            switch (err.status){
                case 401:
                  this.toastrService.error(err.error.message,"Warning!")
                break;
                case 400:
                  const message=Object.keys(err.error.errors)
                     .map(e=>err.error.errors[e]).join('\n')
                     this.toastrService.error(message,'Warning!')
                break;
            }
              return throwError(err)
        }))
    }
}