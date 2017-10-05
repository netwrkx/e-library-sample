import { Component } from '@angular/core';
import { Book } from '../../models';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'category-details',
  templateUrl: 'category-details.html'
})
/*
 * @class Represents Book List Component
 */
export class CategoryDetailsComponent {

  public books: Array<Book> = [];


  constructor(private params: NavParams,private viewCtrl: ViewController) {
    this.books = params.get('books');
  }
}
