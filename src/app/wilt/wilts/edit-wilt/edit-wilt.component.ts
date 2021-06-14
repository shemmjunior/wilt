import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-wilt',
  templateUrl: './edit-wilt.component.html',
  styleUrls: ['./edit-wilt.component.scss']
})
export class EditWiltComponent implements OnInit {

  constructor(private toastService: ToastService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.toastService.showToast('primary', 'Wilt Updated')
    this.router.navigate(['../'], { relativeTo: this.route })

  }

}
