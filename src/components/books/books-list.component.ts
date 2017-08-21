import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'books-list',
  templateUrl: 'books-list.html'
})
export class BooksListComponent {
  public books: Array<any>;

  constructor(public navCtrl: NavController) {
    this.books = [1, 2, 3, 4]
  }
}
