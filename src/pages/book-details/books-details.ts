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
  public book: Book;

  constructor(private params: NavParams, private viewCtrl: ViewController) {
    this.book = params.get('book');
  }
  closeModal() {
    this.viewCtrl.dismiss();
}
}
