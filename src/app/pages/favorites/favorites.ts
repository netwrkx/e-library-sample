import { Component } from '@angular/core';
import { Book } from '../../models';
import { NavController } from 'ionic-angular';
import { FavoriteListComponent } from '../../components/books';
import { CategoryService } from '../../services';

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
  constructor(public navCtrl: NavController, private categoryServ: CategoryService) {
    this.categories = this.categories.concat(this.categoryServ.getCategories());
  };

  goTo(item) {

    if (item === 'All') {
      this.books = this.categoryServ.getAllBooks();
    } else {
      this.books = this.categoryServ.getBooks(item);
    }    
    this.navCtrl.push(FavoriteListComponent, { books: this.books });
  }
}
