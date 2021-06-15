import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { WiltService } from '../wilt.service';

@Component({
  selector: 'app-my-wilts',
  templateUrl: './my-wilts.component.html',
  styleUrls: ['./my-wilts.component.scss']
})
export class MyWiltsComponent implements OnInit {
  wilts: any = [1,2,3,4,5,6,7,8,9,10]
  constructor(private wiltService: WiltService) { }

  ngOnInit(): void {
  }

  deleteWilt(id: string) {
    // this.wiltService.deleteWilt(id).subscribe((res) => {
    //   console.log('Wilt Deleted')
    // }, (err) => {
    //   console.log(err)
    // })
  }



}
