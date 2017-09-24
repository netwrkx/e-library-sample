import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../models';
import {BooksService} from '../../services';

@Component({
  selector: 'search-page',
  templateUrl: 'search.html'
})
/*
 * @class Represents Search Page
 */
export class SearchPage {
  public books: Array<Book>;
  public start: number=0;
  public step: number=12;
/*
 * Fetch page with books
 */
  constructor(private booksService: BooksService, public navCtrl: NavController) {
    booksService.get('flashpoint', this.start).subscribe(books => this.books = books);
  }
  viewMore() {
    // this.start+=this.step;
    // this.booksService.get('flashpoint', this.start).subscribe(books => {
    //   for(let book of books) this.books.push(book);
    // });
  }
}
