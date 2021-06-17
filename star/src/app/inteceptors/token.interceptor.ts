// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
// // import { JwtService } from '../services/jwt.service';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private jwt: JwtService) {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const token = this.jwt.getToken();
//     const identification = this.jwt.getIdentification();
//     const headersConfig = {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       // identification: identification
//     };

//     if (token) {
//       headersConfig['Authorization'] = `Bearer ${token}`;
//     }
//     request = request.clone({
//       url: environment.apiUrl + request.url,
//       setHeaders: headersConfig,
//       setParams: { userId: identification },
//     });
//     return next.handle(request);
//   }
// }
