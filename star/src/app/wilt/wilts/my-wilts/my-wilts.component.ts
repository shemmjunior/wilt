import { Component, OnInit } from '@angular/core';
import { WiltService } from '../wilt.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-wilts',
  templateUrl: './my-wilts.component.html',
  styleUrls: ['./my-wilts.component.scss']
})
export class MyWiltsComponent implements OnInit {

  ownWiltsData: [];

  constructor(private wiltService: WiltService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ownWiltsData = this.route.snapshot.data.ownWiltsData;
  }

  deleteWilt(id: string, index): void {
    this.wiltService.deleteWilt(id).subscribe(() => {
      // this.ownWiltsData.splice(index, 1);
    });

  }



}
