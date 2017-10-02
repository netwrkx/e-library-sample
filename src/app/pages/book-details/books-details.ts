import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams, ToastController } from 'ionic-angular';
import { Book } from '../../models';
import { FavoriteSwichService } from '../../services';
import { AddFavoriteList } from '../../pages/add-favorite-list/add-favorite-list';

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

  constructor(private params: NavParams, public modalCtrl: ModalController, private viewCtrl: ViewController, public favorite: FavoriteSwichService, public toast: ToastController) {
    this.book = params.get('book');
    this.switchCase = params.get('case');
  }

  closeModal() {
    this.viewCtrl.dismiss(this.switchCase);
  }
  switchAdd() {
    if (this.switchCase[0]) {
      let addCategory = this.modalCtrl.create(AddFavoriteList);
      addCategory.onDidDismiss(data => {
        if (data) {
          this.switchCase = this.favorite.swich(this.switchCase[0], this.switchCase[1], this.book, data);
        }
      });
      addCategory.present();
    } else {
      this.toast.create({
        message: "The book has been deleted from favorites. It's sad, but true!",
        duration: 3000,
        position: 'top'
      }).present();
      this.switchCase = this.favorite.swich(this.switchCase[0], this.switchCase[1], this.book, '');
    }
  }
}
