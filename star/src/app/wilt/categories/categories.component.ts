import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  explore: any = [1,2,3,4,5,6,7,8]

  constructor() { }

  ngOnInit(): void {
  }

}
