import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { WiltService } from '../wilt.service';
import { LocalStorageService } from '../../../services/localStorage.service';

@Component({
  selector: 'app-edit-wilt',
  templateUrl: './edit-wilt.component.html',
  styleUrls: ['./edit-wilt.component.scss']
})
export class EditWiltComponent implements OnInit {

  id: string;
  title: string;
  description: string;
  ref_link_one: string;
  ref_link_two: string;
  wiltData: any;


  constructor(private toastService: ToastService, private router: Router, private route: ActivatedRoute, private wiltService: WiltService, private localStorage: LocalStorageService) {
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit() {

  }

  submit() {
    const data = {
      title: this.title,
      description: this.description,
      ref_link_one: this.ref_link_one,
      ref_link_two: this.ref_link_two,
      user_id: this.localStorage.getUserID()

    }

    this.wiltService.updateWilt(this.id, data).subscribe((res) => {
          this.router.navigate(['../'], { relativeTo: this.route })
    }, (err) => {
         console.log(err)
    });



  }

}
