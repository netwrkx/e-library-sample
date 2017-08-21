import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Book} from '../../models';

@Component({
  selector: 'favorites-page',
  templateUrl: 'favorites.html'
})

export class FavoritesPage {
  public books: Array<Book>;

  constructor(public navCtrl: NavController) {
    this.books = [];
  }
}
