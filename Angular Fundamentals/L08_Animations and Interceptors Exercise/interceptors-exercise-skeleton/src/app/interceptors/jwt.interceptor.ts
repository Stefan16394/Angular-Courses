import { HttpRequest, HttpResponse, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private toastrService:ToastrService,private router:Router){
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'))

        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    "Authorization": 'Bearer ' + currentUser.token
                }
            })
        }
        return next.handle(request)
            .pipe(tap((res: any) => {
                if (res instanceof HttpResponse && res.body.token) {
                    this.saveToken(res.body)
                    this.toastrService.success(res.body.message,"Success!")
                    this.router.navigate(['/furniture/all'])
                }

                if(res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')){
                    this.toastrService.success(res.body.message)
                    this.router.navigate(['/signin'])
                }

                if(res instanceof HttpResponse && res.body.success && res.url.endsWith('create')){
                    this.toastrService.success(res.body.message)
                    this.router.navigate(['/furniture/all'])
                }
            }))
    }

    private saveToken(data){
        localStorage.setItem('currentUser',JSON.stringify({
            "username":data.user.name,
            "token":data.token
        }))
    }

}