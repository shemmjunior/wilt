import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WiltService {

  constructor(private http: HttpClient) {}

  postWilt(data): Observable<any> {
    return this.http.post(`/wilt/add`, data);
  }

  getWilts(): Observable<any> {
    return this.http.get(`/wilt`);
  }

  getWilt(id: string): Observable<any> {
    return this.http.get(`/wilt/${id}`);
  }

  updateWilt(id: string, data: any): Observable<any> {
    return this.http.put(`/wilt/${id}`, data);
  }

  deleteWilt(id: string): Observable<any> {
    return this.http.delete(`/wilt/${id}`);
  }

}