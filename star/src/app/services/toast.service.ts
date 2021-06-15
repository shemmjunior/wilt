import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastrService: NbToastrService) {
  }



  showToast(status, message) {
    this.toastrService.show(status, message, { status })
    // status, `Toast: ${++this.index}`, { status }
  }
}
