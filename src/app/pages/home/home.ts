import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SearchPage} from '../search';
import {FavoritesPage} from '../favorites';
import {OAuthProvidersListPage} from '../oauth/list/oauth-providers.list.page'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/home.scss']
})
/*
 * @class Represents Home Page
 */
export class HomePage {
  private pages: any;

  constructor(public navCtrl: NavController) {
    this.pages = {
      search: SearchPage,
      favorites: FavoritesPage,
      oauth: OAuthProvidersListPage
    };
  }

  private goTo(page: any) {
    this.navCtrl.push(page);
  }

}
