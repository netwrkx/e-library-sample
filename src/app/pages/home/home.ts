import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SearchPage} from '../search';
import {CategoriesPage} from '../categories';
import {OauthProvidersListPage} from '../oauth-list/oauth-providers.list';
import { SessionService } from './../../services';

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

  constructor(public navCtrl: NavController, private session: SessionService) {
    this.pages = {
      search: SearchPage,
      favorites: CategoriesPage,
      oauth: OauthProvidersListPage
    };
  }

  private goTo(page: any) {
    this.navCtrl.push(page);
  }

  logOut() {
    this.session.logout()
      .then(() => {})
      .catch(error => console.log(error));
  }

}
