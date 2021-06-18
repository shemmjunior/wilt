import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wilts',
  templateUrl: './wilts.component.html',
  styleUrls: ['./wilts.component.scss']
})
export class WiltsComponent implements OnInit {

  wilts: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.wilts = this.route.snapshot.data.wiltsData;
  }


}
