import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { Book } from '../../models';
import { CategoriesManagementPage } from '../../pages/categories-management';

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


  constructor(private params: NavParams, public modalCtrl: ModalController, private viewCtrl: ViewController, public toast: ToastController) {
    this.book = this.params.get('book');
  };

  closeModal() {
    this.viewCtrl.dismiss();
  };

  categoryManage() {
    this.modalCtrl.create(CategoriesManagementPage, { book: this.book }).present();
  };
}
