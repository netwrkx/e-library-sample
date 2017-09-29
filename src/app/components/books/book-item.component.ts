import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../models';
import { ModalController } from 'ionic-angular';
import { BooksDetailsPage } from '../../pages/book-details/books-details';
import { FavoriteSwichService } from '../../services';

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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public favorite: FavoriteSwichService) {
  }

  ngOnInit() {

    if (localStorage[this.book.id]) {
      this.switchCase = this.favorite.swich(true, false, false);
    } else this.switchCase = this.favorite.swich(this.switchCase[0], this.switchCase[1], false);

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
    this.modalCtrl.create(BooksDetailsPage, { book: this.book }).present();
  }
  switchAdd() {
    this.switchCase = this.favorite.swich(this.switchCase[0], this.switchCase[1], this.book);
  }
}
