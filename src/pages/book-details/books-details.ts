import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'books-details-page',
  templateUrl: 'books-details.html'
})
/*
 *@class Represents Book Details Page
 */
export class BooksDetailsPage {

  constructor(public navCtrl: NavController) {
  }
}
