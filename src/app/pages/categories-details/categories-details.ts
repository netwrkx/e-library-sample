import { Component } from '@angular/core';
import { Book } from '../../models';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { CategoriesService } from '../../services';


@Component({
  selector: 'categories-details',
  templateUrl: 'categories-details.html'
})
/*
 * @class Represents Book List Component
 */
export class CategoriesDetailsPage {

  public books: Array<Book> = [];
  public category: String;


  constructor(private params: NavParams, private viewCtrl: ViewController, private categoriesService: CategoriesService) {
    this.category = params.get('category');
    if (this.category === 'All') {
      this.categoriesService.getAllBooks().subscribe(books => this.books = books);
    } else {
      this.categoriesService.getBooks(this.category).subscribe(books => this.books = books);
    }
  }
}
