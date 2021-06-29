import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  constructor() {}

  saveUserData(data: any): void {
    const format = JSON.stringify(data);
    localStorage.setItem('wilt_user', format);
  }
  
  getUserData(): any {
    return JSON.parse(localStorage.getItem('wilt_user'));
  }

  getUserID(): any {
    return JSON.parse(localStorage.getItem('wilt_user')).user_id;
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('wilt_user')).token;
  }


  clearToken(): void {
    localStorage.removeItem('wilt_user');
  }
}
