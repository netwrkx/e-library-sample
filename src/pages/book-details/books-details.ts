import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { ViewController } from 'ionic-angular';
import { Book } from '../../models';

@Component({
  selector: 'books-details-page',
  templateUrl: 'books-details.html'
})
/*
 *@class Represents Book Details Page
 */
export class BooksDetailsPage {
  @Input() public book: Book;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, params: NavParams) {
  
  }
  closeModal() {
    this.viewCtrl.dismiss();
}
}
