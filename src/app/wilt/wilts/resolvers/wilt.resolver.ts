import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { WiltService } from '../wilt.service';

@Injectable({
  providedIn: 'root'
})
export class WiltResolver implements Resolve<boolean> {
  constructor(private wiltService: WiltService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.wiltService.getWilt(route.paramMap.get('id'));
  }
}
