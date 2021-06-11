import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-wilt',
  templateUrl: './post-wilt.component.html',
  styleUrls: ['./post-wilt.component.scss']
})
export class PostWiltComponent implements OnInit {



  constructor(private toastService: ToastService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  submit() {
    this.toastService.showToast('primary', 'Post Added')
    this.router.navigate(['../'], { relativeTo: this.route })

  }



}
