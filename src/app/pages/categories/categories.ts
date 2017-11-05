import { Component } from '@angular/core';
import { Book } from '../../models';
import { NavController } from 'ionic-angular';
import { CategoriesDetailsPage } from '../categories-details';
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
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  };

  goTo(categoryName) {
    this.navCtrl.push(CategoriesDetailsPage, { category: categoryName });
  };

  removeCategory(categoryName) {
    (categoryName === 'All') ? this.categories = [] :
      this.categories.splice(this.categories.indexOf(categoryName), 1);
    this.categoriesService.remove(categoryName).subscribe();
  }
}
