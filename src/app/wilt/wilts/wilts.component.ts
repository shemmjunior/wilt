import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wilts',
  templateUrl: './wilts.component.html',
  styleUrls: ['./wilts.component.scss']
})
export class WiltsComponent implements OnInit {

  wilts: any = [1,2,3,4,5,6,7,8,9,10]

  constructor() { }

  ngOnInit(): void {
  }

}
