import { Component } from '@angular/core';
import { Book } from '../../models';
import { NavController } from 'ionic-angular';
import { FavoriteListComponent } from '../../components/books';

@Component({
  selector: 'favorites-page',
  templateUrl: 'favorites.html'
})
/*
 * @class Represents Favorites Page
 * @param {Object[]} Book
 */
export class FavoritesPage {
  public categories: string[] = ['All'];
  public books: Array<Book> = [];
  /*
   *Fetch page with books
   */
  constructor(public navCtrl: NavController) {
    for (let key in localStorage) {
      if (this.categories.indexOf(key.substring(14)) === -1) {
        this.categories.push(key.substring(14));
      }
    };
  };

  goTo(item) {
    if (item === 'All') {
      for (let key in localStorage) {
        if (key.length >= 12) this.books.push(JSON.parse(localStorage[key]));
      }
    } else {
      for (let key in localStorage) {
        if (key.substring(14) === item) {
          this.books.push(JSON.parse(localStorage[key]));
        }
      };
    }
    this.navCtrl.push(FavoriteListComponent, {books : this.books});
    this.books=[];    
  }
}
