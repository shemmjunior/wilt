import { Component, OnInit } from '@angular/core';
import { WiltService } from './wilt.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wilts',
  templateUrl: './wilts.component.html',
  styleUrls: ['./wilts.component.scss']
})
export class WiltsComponent implements OnInit {

  wilts: [];

  constructor(private wiltService: WiltService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.wilts = this.route.snapshot.data.wiltsData;
  }


}
