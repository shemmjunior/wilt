import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-my-wilts',
  templateUrl: './my-wilts.component.html',
  styleUrls: ['./my-wilts.component.scss']
})
export class MyWiltsComponent implements OnInit {
  wilts: any = [1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit(): void {
  }



}
