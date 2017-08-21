import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Book } from '../../models';

@Component({
  selector: 'books-list',
  templateUrl: 'books-list.html'
})

export class BooksListComponent {
  @Input() public books: Array<Book>;

  constructor(public navCtrl: NavController) {
  }
}
