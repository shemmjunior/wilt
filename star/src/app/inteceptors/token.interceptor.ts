import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../services/localStorage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userID = this.localStorage.getUserID();

    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    request = request.clone({
      url: environment.serverUrl + request.url,
      setHeaders: headersConfig,
      setParams: { user_id: userID },
    });
    return next.handle(request);
  }
}
