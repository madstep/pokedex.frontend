import { Router } from '@angular/router';
import { SessionStorageService } from '../services/storage/storage-service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
/* import {
  catchError,
  tap,
  finalize
} from 'rxjs/operators'; */

import { finalize, tap, catchError } from 'rxjs/operators';
import { UtilityService } from '../services/general/utility.service';
import { AuthenticationService } from '../services/general/authentication.service'
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {
  /* counter = 0; */

  constructor(
    private authenticationService: AuthenticationService,
    private utilityService: UtilityService,
    private sessionStorageService: SessionStorageService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newBody: any = req.body || {};
    if (newBody.noBase64 !== true &&
      req.method.toLowerCase() === 'post' && !(newBody instanceof FormData)) {
        newBody = { data: this.utilityService.encodeObjectToBase64(newBody) };
    }
    let token = '';
    token = `Bearer ${this.authenticationService.getToken()}`;
    const authReq = req.clone(
      {
        headers: req.headers.set('Authorization', token),
        body: newBody
      }
    );
    /* const mainMe = this; */
    return next.handle(authReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            /*  mainMe.counter++;
             if (mainMe.counter === 1) { */
            this.sessionStorageService.clearStorage();
            this.router.navigate(['/extranet/login']);

            /* const modalPromise = mainMe.dialogService.show();
            const newObservable = fromPromise(modalPromise);
            newObservable.subscribe(
              res => {
                if (res === true) {
                  console.log(res);
                } else {
                  console.log(err);
                }
              },
              reason => {
                console.log(reason);
              }
            );
            return newObservable; */
            /* }
            throwError(err); */
          }
          return throwError(err);
        }
        return throwError(err);
      }),
      finalize(() => {
      })
    );
  }
}
