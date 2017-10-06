import { Component } from '@angular/core';
import { Book } from '../../models';
import { NavController } from 'ionic-angular';
import { CategoriesDetailsComponent } from '../../components/books';
import { CategoriesService } from '../../services';

@Component({
  selector: 'categories-page',
  templateUrl: 'categories.html'
})
/*
 * @class Represents Favorites Page
 * @param {Object[]} Book
 */
export class CategoriesPage {
  public categories: string[];
  public books: Array<Book> = [];
  /*
   *Fetch page with books
   */
  constructor(public navCtrl: NavController, private categoriesService: CategoriesService) {
    this.categories = this.categoriesService.getCategories();
  };

  goTo(item) {
    if (item === 'All') {
      this.books = this.categoriesService.getAllBooks();
    } else {
      this.books = this.categoriesService.getBooks(item);
    }
    this.navCtrl.push(CategoriesDetailsComponent, { books: this.books });
  };

  removeCategory(item) {
    (item === 'All') ? this.categories = [] :
      this.categories.splice(this.categories.indexOf(item), 1);
    this.categoriesService.remove(item);
  }
}
