import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Book } from '../../models';


@Component({
  selector: 'add-favorite-list',
  templateUrl: 'add-favorite-list.html',
  styleUrls: ['/add-favorite-list.scss']
})

/*
 *@class Represents Book Details Page
 */
export class AddFavoriteList {
  public book: Book;
  private switchCase: boolean[] = [false, false];
  private categories: string[] = [];
  private category: string;

  constructor(private params: NavParams, private viewCtrl: ViewController) {
    this.book = params.get('book');
    this.switchCase = params.get('case');
    this.categories = [];
    for (let key in localStorage) {
      if (this.categories.indexOf(key.substring(14)) === -1) {
        this.categories.push(key.substring(14));
      }
    };
  }

  closeModal(select) {
    if (select && select != 'cancel') {
      this.viewCtrl.dismiss(select);
    } else if (select === 'cancel') this.viewCtrl.dismiss(false);
  }

  addNew() {
    if (this.category && this.categories.indexOf(this.category) === -1) {
      console.log(this.category);
      this.categories.push(this.category);
    }
  }
}
