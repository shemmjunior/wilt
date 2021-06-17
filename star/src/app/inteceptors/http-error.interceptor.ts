import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toast: ToastService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Error founds')
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toast.showDangerToast(error.error.message);
        return throwError(error);
      }),
      finalize(() => {
        // this.error.remove(loading);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
