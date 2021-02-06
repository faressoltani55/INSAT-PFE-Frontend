import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/home',                 title: 'Home',            icon: 'nc-sound-wave',       class: '' },
  { path: '/calendar',             title: 'Calendar',        icon: 'nc-calendar-60',    class: '' },
  { path: '/search',               title: 'Search',          icon: 'nc-zoom-split',    class: '' },
  { path: '/profile',              title: 'Profile',         icon: 'nc-single-02',  class: '' },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menuItems: any[] | undefined;
  ngOnInit(): void {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      console.log(this.menuItems);
  }
  }


