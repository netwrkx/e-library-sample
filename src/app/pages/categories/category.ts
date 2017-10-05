import { Component } from '@angular/core';
import { Book } from '../../models';
import { NavController } from 'ionic-angular';
import { CategoryListComponent } from '../../components/books';
import { CategoryService } from '../../services';

@Component({
  selector: 'category-page',
  templateUrl: 'category.html'
})
/*
 * @class Represents Favorites Page
 * @param {Object[]} Book
 */
export class CategoryPage {
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
    this.navCtrl.push(CategoryListComponent, { books: this.books });
  };

  removeCategory(item, e) {
    (item === 'All') ? this.categories.splice(1) :
      this.categories.splice(this.categories.indexOf(item), 1);
    this.categoryServ.remove(item);
  }
}
