import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseUrl = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private customHttpClient: HttpClient;


  constructor(backend: HttpBackend) {
    this.customHttpClient = new HttpClient(backend);
  }

  signup(data: any): Observable<any> {
    return this.customHttpClient.post(`${baseUrl}/auth/signup`, data)
  }

  login(data: any): Observable<any> {
    return this.customHttpClient.post(`${baseUrl}/auth/signin`, data)
  }
}
