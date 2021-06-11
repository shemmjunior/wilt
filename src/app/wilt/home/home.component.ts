import { NbMenuService } from '@nebular/theme';
import { NbSearchService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private searchService: NbSearchService, private menuService: NbMenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.menuService.onItemClick().subscribe((event) => {
      if (event.item.title === 'Profile') {
        console.log('Profile Clicked')
        this.openProfilePage()
      } else if (event.item.title === 'Logout') {
        console.log('Logut')
        this.logout()
      }
    })
  }

  openProfilePage() {
    this.router.navigate(['./profile'], { relativeTo: this.route })
  }

  logout() {
    this.router.navigate(['../'])
  }

  closeSearch(): void {
    this.searchService.deactivateSearch('');
  }

}
