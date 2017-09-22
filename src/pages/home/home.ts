import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SearchPage} from '../search';
import {FavoritesPage} from '../favorites';

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
  private tabBarElement: any;
  
  constructor(public navCtrl: NavController) {
    this.pages = {
      search: SearchPage,
      favorites: FavoritesPage
    };
    this.tabBarElement = document.querySelector('.tabbar');

  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  private goTo(page: any) {
    this.navCtrl.push(page);
  }

}
