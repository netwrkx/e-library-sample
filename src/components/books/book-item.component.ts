import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models';

import { ModalController } from 'ionic-angular';
import { BooksDetailsPage } from '../../pages/book-details/books-details';

@Component({
  selector: 'book-item',
  templateUrl: 'book-item.html'
})
/*
 * @class Represents Book Item Component
 * @param {Object} Book - the example of book with fields
 */
export class BookItemComponent {
  @Input() public book: Book;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  openModal() {
    let myModal = this.modalCtrl.create(BooksDetailsPage);
    myModal.present();
  }

}
