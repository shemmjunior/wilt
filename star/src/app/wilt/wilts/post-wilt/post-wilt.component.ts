import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WiltService } from '../wilt.service';
import { LocalStorageService } from '../../../services/localStorage.service';

@Component({
  selector: 'app-post-wilt',
  templateUrl: './post-wilt.component.html',
  styleUrls: ['./post-wilt.component.scss']
})
export class PostWiltComponent implements OnInit {

  title: string;
  description: string;
  ref_link_one: string;
  ref_link_two: string;
  loading = false;


  constructor(private router: Router, private route: ActivatedRoute, private wiltService: WiltService, private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {

  }

  submit(): void {
    const data = {
      title: this.title,
      description: this.description,
      ref_link_one: this.ref_link_one,
      ref_link_two: this.ref_link_two,
      user_id: this.localStorage.getUserID()
    };
    this.loading = true;
    this.wiltService.postWilt(data).subscribe((res) => {
      this.loading = true;

      this.router.navigate(['../'], { relativeTo: this.route })
    }, (err) => {
      this.loading = false;

    });



  }



}
