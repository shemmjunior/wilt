import { NbMenuService } from '@nebular/theme';
import { NbSearchService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = [{ title: 'Profile' }, { title: 'Logout' }];

  minimized = [
    { title: 'Home' },
    { title: 'Explore' },
    { title: 'Categories' },
    { title: 'Add Wilt' },
    { title: 'My Wilts' },
    { title: 'Favourites' },
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  constructor(
    private searchService: NbSearchService,
    private menuService: NbMenuService,
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.menuService.onItemClick().subscribe((event) => {
      if (event.item.title === 'Profile') {
        this.openProfilePage();
      } else if (event.item.title === 'Logout') {
        this.logout();
      } else if (event.item.title === 'Home') {
        this.openHomePage();
      } else if (event.item.title === 'Explore') {
        this.openExplorePage();
      } else if (event.item.title === 'Categories') {
        this.openCategoriesPage();
      } else if (event.item.title === 'Add Wilt') {
        this.openAddWiltPage();
      } else if (event.item.title === 'My Wilts') {
        this.openMyWiltsPage();
      } else if (event.item.title === 'Favourites') {
        this.openFavouritesPage();
      }
    });
  }

  openProfilePage() {
    this.router.navigate(['./profile'], { relativeTo: this.route });
  }

  openHomePage() {
    this.router.navigate(['./wilts'], { relativeTo: this.route });
  }

  openExplorePage() {
    this.router.navigate(['./explore'], { relativeTo: this.route });
  }

  openCategoriesPage() {
    this.router.navigate(['./categories'], { relativeTo: this.route });
  }

  openMyWiltsPage() {
    this.router.navigate(['./own'], { relativeTo: this.route });
  }

  openAddWiltPage() {
    this.router.navigate(['./add'], { relativeTo: this.route });
  }

  openFavouritesPage() {
    this.router.navigate(['./favourites'], { relativeTo: this.route });
  }

  logout() {
    this.localStorage.clearToken()
    this.router.navigate(['../']);
  }

  closeSearch(): void {
    this.searchService.deactivateSearch('');
  }
}
