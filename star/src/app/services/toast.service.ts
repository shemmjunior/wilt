import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastrService: NbToastrService) {
  }



  showSuccessToast(message) {
    this.toastrService.success(message, 'Success')
  }

  showDangerToast(message) {
    this.toastrService.danger(message, 'Error' )
  }
}
