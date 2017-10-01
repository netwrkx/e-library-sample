import {Component} from '@angular/core';

import {SignInPage} from '../sign-in-page'
import {HomePage} from '../home';
import {FavoritesPage} from '../favorites';
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
 * Create HomePage, SearchPage, FavoritesPage
 */
  constructor() {
    this.tabs = [
<<<<<<< HEAD:src/pages/tabs/tabs.ts
      {component: SignInPage, icon: 'log-in', title: 'SignIn'},
      {component: HomePage, icon: 'home', title: 'Home'},
      {component: SearchPage, icon: 'search', title: 'Search'},
      {component: FavoritesPage, icon: 'star', title: 'Favorites'},
=======
      {component: HomePage, icon: 'md-home', title: 'Home'},
      {component: SearchPage, icon: 'md-search', title: 'Search'},
      {component: FavoritesPage, icon: 'md-star', title: 'Favorites'},
>>>>>>> develop:src/app/pages/tabs/tabs.ts
    ];
  }
}
