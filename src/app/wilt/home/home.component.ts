import { NbSearchService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  constructor(private searchService: NbSearchService) { }

  ngOnInit(): void {
  }

  closeSearch(): void {
    this.searchService.deactivateSearch('');
  }

}
