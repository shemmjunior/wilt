import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  explore: any = [1,2,3,4,5,6,7,8]
  today: any = [1,2,3,4]
  constructor() { }

  ngOnInit(): void {
  }

}
