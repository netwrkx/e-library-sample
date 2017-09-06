import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Book } from '../../models';

@Component({
  selector: 'books-list',
  templateUrl: 'books-list.html'
})
/*
 * @class Represents Book List Component
 * @param {Object[]} - array of the books
 */
export class BooksListComponent {
  @Input() public books: Array<Book>;

  constructor(public navCtrl: NavController) {
  }
}
