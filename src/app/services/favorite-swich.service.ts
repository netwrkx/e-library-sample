import { Injectable } from '@angular/core';

/*
 * @class Represents Book Service
 */
@Injectable()
export class FavoriteSwichService {

  swich(add, rem, book) {
    if (!add && !rem) return [true, false]
    else if (add && !book) return [false, true]
    else if (add && book) {
      localStorage.setItem(book.id, JSON.stringify(book));
      return [false, true];
    }
    else {
      if (book) localStorage.removeItem(book.id);
      return [true, false]
    };
  }
}
