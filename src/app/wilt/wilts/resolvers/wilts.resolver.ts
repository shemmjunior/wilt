import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { WiltService } from '../wilt.service';

@Injectable({
  providedIn: 'root'
})
export class WiltsResolver implements Resolve<boolean> {
  constructor(private wiltService: WiltService) {}
  resolve(): Observable<boolean> {
    return this.wiltService.getWilts();
  }
}
