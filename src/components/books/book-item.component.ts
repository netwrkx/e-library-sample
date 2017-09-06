import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../models';

@Component({
  selector: 'book-item',
  templateUrl: 'book-item.html'
})
/*
 *@class Represents Book Item Component
 * @param {Object} Book - the example of book with fields
 */
export class BookItemComponent {
  @Input() public book: Book;

  constructor(public navCtrl: NavController) {

  }

}
