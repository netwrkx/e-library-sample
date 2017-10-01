import { Component } from '@angular/core';
import { Book } from '../../models';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'favorite-list',
  templateUrl: 'favorite-list.html'
})
/*
 * @class Represents Book List Component
 */
export class FavoriteListComponent {

  public books: Array<Book> = [];


  constructor(private params: NavParams,private viewCtrl: ViewController) {
    this.books = params.get('books');
  }
}
