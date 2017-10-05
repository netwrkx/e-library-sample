import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { Book } from '../../models';
import { CategoryDetails } from '../../pages/category-details';

@Component({
  selector: 'books-details-page',
  templateUrl: 'books-details.html',
  styleUrls: ['/books-details.scss']
})

/*
 *@class Represents Book Details Page
 */
export class BooksDetailsPage {
  public book: Book;
  private switchCase: boolean[] = [false, false];

  constructor(private params: NavParams, public modalCtrl: ModalController, private viewCtrl: ViewController, public toast: ToastController) {
    this.book = params.get('book');
    this.switchCase = params.get('case');
  }

  closeModal() {
    this.viewCtrl.dismiss(this.switchCase);
  }


}
