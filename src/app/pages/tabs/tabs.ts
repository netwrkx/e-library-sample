import {Component} from '@angular/core';

import {HomePage} from '../home';
import {FavoritesPage} from '../favorites';
import {SearchPage} from '../search';
import { OAuthProvidersListPage } from '../oauth/list/oauth-providers.list.page';
import { OAuthProfilePage } from '../oauth/profile/oauth-profile.page';

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
      {component: OAuthProvidersListPage, icon: 'log-in', title: 'SignIn'},
      {component: HomePage, icon: 'home', title: 'Home'},
      {component: SearchPage, icon: 'search', title: 'Search'},
      {component: FavoritesPage, icon: 'star', title: 'Favorites'},
      {component: OAuthProfilePage, icon: 'log-in', title: 'Sign-in'}
    ];
  }
}
