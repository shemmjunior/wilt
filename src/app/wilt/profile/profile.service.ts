import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get('/profile')
  }

  updateProfile(id: string, data: any): Observable<any> {
    return this.http.put(`/profile/${id}`, data)
  }
}
