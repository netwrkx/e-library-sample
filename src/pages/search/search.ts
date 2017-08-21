import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../models';

@Component({
  selector: 'search-page',
  templateUrl: 'search.html'
})

export class SearchPage {
  public books: Array<Book>;

  constructor(public navCtrl: NavController) {
    this.books = [];
  }
}
