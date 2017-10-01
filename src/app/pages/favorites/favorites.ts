import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Book} from '../../models';
import {BooksService} from '../../services';

@Component({
  selector: 'favorites-page',
  templateUrl: 'favorites.html'
})
/*
 * @class Represents Favorites Page
 * @param {Object[]} Book
 */
export class FavoritesPage {
  public books: Array<Book>;
  /*
   *Fetch page with books
   */
  constructor(private booksService: BooksService, private navCtrl: NavController) {
    booksService.get().subscribe(books => this.books = books);
  }
}
