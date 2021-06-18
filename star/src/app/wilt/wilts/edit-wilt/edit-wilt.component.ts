import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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


  constructor( private router: Router, private route: ActivatedRoute, private wiltService: WiltService) {
    this.id = this.route.snapshot.params.id;
    this.wiltData = this.route.snapshot.data.wiltData;

  }

  ngOnInit(): void {
      this.title = this.wiltData.title;
      this.description = this.wiltData.description;
      this.ref_link_one = this.wiltData.ref_link_one;
      this.ref_link_two = this.wiltData.ref_link_two;
  }

  submit(): void {
    const data = {
      title: this.title,
      description: this.description,
      ref_link_one: this.ref_link_one,
      ref_link_two: this.ref_link_two,
    };

    this.wiltService.updateWilt(this.id, data).subscribe((res) => {
          this.router.navigate(['../../'], { relativeTo: this.route });
    });



  }

}
