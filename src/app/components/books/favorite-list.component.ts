import { Component } from '@angular/core';
import { Book } from '../../models';


@Component({
  selector: 'favorite-list',
  templateUrl: 'favorite-list.html'
})
/*
 * @class Represents Book List Component
 */
export class FavoriteListComponent {

  public books: Array<Book> = [];

  constructor() {
  }

  ngOnInit() {
    for (let key in localStorage) {
      if (key.length >= 12) this.books.push(JSON.parse(localStorage[key]));
    }
  }
}
