import {Component} from '@angular/core';

import {HomePage} from '../home';
import {CategoryPage} from '../categories';
import {SearchPage} from '../search';

@Component({
  templateUrl: 'tabs.html',
  styleUrls: ['/tabs.scss']
})
/*
 * @class Represents Tabs Page
 * @param {Array[]} tabs
 */
export class TabsPage {
  public tabs: Array<any>;
/*
 * Create HomePage, SearchPage, CategoryPage
 */
  constructor() {
    this.tabs = [
      {component: HomePage, icon: 'md-home', title: 'Home'},
      {component: SearchPage, icon: 'md-search', title: 'Search'},
      {component: CategoryPage, icon: 'md-star', title: 'Favorites'},
    ];
  }
}
