import { Injectable } from '@angular/core';

/*
 * @class Represents Book Service
 */
@Injectable()
export class FavoriteSwichService {
  find(book) {
    let el;
    for (let key in localStorage) { if (key.substring(0, 12) === book.id) el = key };
    return el;
  };

  swich(add, rem, book) {
    if (!add && !rem) return [true, false]
    else if (add && !book) return [false, true]
    else if (add && book) {
      localStorage.setItem(`${book.id}@`, JSON.stringify(book));
      return [false, true];
    }
    else {
      if (book) localStorage.removeItem(this.find(book));
      return [true, false]
    };
  }
}
