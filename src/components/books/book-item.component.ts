import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../models';

@Component({
  selector: 'book-item',
  templateUrl: 'book-item.html'
})

export class BookItemComponent {
  @Input() public book: Book;

  constructor(public navCtrl: NavController) {

  }

}
