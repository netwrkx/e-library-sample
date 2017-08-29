import {Component} from '@angular/core';

import {HomePage} from '../home';
import {FavoritesPage} from '../favorites';
import {SearchPage} from '../search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public tabs: Array<any>;

  constructor() {
    this.tabs = [
      {component: HomePage, icon: 'home', title: 'Home'},
      {component: SearchPage, icon: 'search', title: 'Search'},
      {component: FavoritesPage, icon: 'star', title: 'Favorites'},
    ];
  }
}

