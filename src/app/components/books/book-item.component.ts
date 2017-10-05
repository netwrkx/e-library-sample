import { Component, Input } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { Book } from '../../models';
import { BooksDetailsPage } from '../../pages/book-details/books-details';
import { CategoryManagement } from '../../pages/category-management';

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
  private stars: string[] = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public toast: ToastController) {
  }

  ngOnInit() {

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

  categoryManage() {
    this.modalCtrl.create(CategoryManagement, { book: this.book }).present();
  }
}
