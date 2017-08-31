import {Component} from '@angular/core';

import {HomePage} from '../home';
import {FavoritesPage} from '../favorites';
import {SearchPage} from '../search';

@Component({
  templateUrl: 'tabs.html'
})
/*
 * @class Represents Tabs Page
 * @param {Array[]} tabs
 */
export class TabsPage {
  public tabs: Array<any>;
/*
 * Create HomePage, SearchPage, FavoritesPage
 */
  constructor() {
    this.tabs = [
      {component: HomePage, icon: 'home', title: 'Home'},
      {component: SearchPage, icon: 'search', title: 'Search'},
      {component: FavoritesPage, icon: 'star', title: 'Favorites'},
    ];
  }
}
