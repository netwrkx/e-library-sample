import { Component, Input } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { Book } from '../../models';
import { BooksDetailsPage } from '../../pages/book-details/books-details';
import { FavoriteSwichService } from '../../services';
import { AddFavoriteList } from '../../pages/add-favorite-list/add-favorite-list';

@Component({
  selector: 'book-item',
  templateUrl: 'book-item.html',
  styleUrls: ['/book-item.scss']
})
/*
 * @class Represents Book Item Component
 * @param {Object} Book - the example of book with fields
 */
export class BookItemComponent {
  @Input() public book: Book;
  private switchCase: boolean[] = [false, false];
  private stars: string[] = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public favorite: FavoriteSwichService, public toast: ToastController) {
  }

  ngOnInit() {
    if (this.favorite.find(this.book)) {
      this.switchCase = this.favorite.swich(true, false, false,'');
    } else this.switchCase = this.favorite.swich(this.switchCase[0], this.switchCase[1], false,'');

    if (!this.book || !this.book.rating || !this.book.rating.average) return;

    for (let i = 1; i <= 5; i++) {
      const icons = [
        { name: 'md-star', condition: i <= this.book.rating.average },
        { name: 'md-star-half', condition: this.book.rating.average > (i - 1) },
        { name: 'md-star-outline', condition: i > this.book.rating.average }
      ];

      this.stars.push(icons.find(icon => icon.condition).name)
    }
  }

  openModal() {
    let newModal = this.modalCtrl.create(BooksDetailsPage, { book: this.book, case: this.switchCase });
    newModal.onDidDismiss(data => this.switchCase = data);
    newModal.present();
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
