import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    return this.http.post('/auth/signup', data)
  }

  login(data: any): Observable<any> {
    return this.http.post('/auth/login', data)
  }
}
