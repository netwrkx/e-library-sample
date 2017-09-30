import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Book } from '../../models';
import { FavoriteSwichService } from '../../services';

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

  constructor(private params: NavParams, private viewCtrl: ViewController, public favorite: FavoriteSwichService) {
    this.book = params.get('book');
    this.switchCase = params.get('case');
  }

  closeModal() {
    this.viewCtrl.dismiss(this.switchCase);
  }
  switchAdd() {
    this.switchCase = this.favorite.swich(this.switchCase[0], this.switchCase[1], this.book);
  }
}
