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

  constructor(private params: NavParams, private viewCtrl: ViewController) {
    this.book = params.get('book');
    this.switchCase = params.get('case');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
