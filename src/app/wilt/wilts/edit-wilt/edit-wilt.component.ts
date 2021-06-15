import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { WiltService } from '../wilt.service';

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


  constructor(private toastService: ToastService, private router: Router, private route: ActivatedRoute, private wiltService: WiltService) {
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit() {

  }

  submit() {
    const data = {
      title: this.title,
      description: this.description,
      ref_link_one: this.ref_link_one,
      ref_link_two: this.ref_link_two
    }

    // this.wiltService.updateWilt(id, data).subscribe((res) => {
    //       this.toastService.showToast('top-right', 'Wilt Updated')
    //       this.router.navigate(['../'], { relativeTo: this.route })
    // }, (err) => {
    //   this.toastService.showToast('top-right', 'Error Updating Wilt')
    //      console.log(err)
    // });



  }

}
