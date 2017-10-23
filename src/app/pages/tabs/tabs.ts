import {Component} from '@angular/core';

import {HomePage} from '../home';
import {CategoriesPage} from '../categories';
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
 * Create HomePage, SearchPage, CategoryPage
 */
  constructor() {
    this.tabs = [
      {component: HomePage, icon: 'md-home', title: 'Home'},
      {component: SearchPage, icon: 'md-search', title: 'Search'},
      {component: CategoriesPage, icon: 'md-star', title: 'Favorites'},
      {component: OAuthProvidersListPage, icon: 'log-in', title: 'SignIn'},
      {component: OAuthProfilePage, icon: 'log-in', title: 'Sign-in'}
    ];
  }
}
