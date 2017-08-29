import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../models';
import {BooksService} from '../../services';

@Component({
  selector: 'search-page',
  templateUrl: 'search.html'
})

export class SearchPage {
  public books: Array<Book>;

  constructor(private booksService: BooksService, public navCtrl: NavController) {
    booksService.get().subscribe(books => this.books = books);
  }
}
