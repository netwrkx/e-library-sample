import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Book} from '../models';

import 'rxjs/add/operator/map'


/*
 * @class Represents Book Service
 */
@Injectable()
export class BooksService {
  constructor(private http: Http) {
  }

  /*
   *
   * Fetch books from google api
   * @param {string} str - represent string will be searched
   * @param {number} page - represent
   * @returns {Observable}
   *
   */
  public get (str: string): Observable<Book[]> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${str}`;

    return this.http
      .get(url)
      .map(response => {
        let booksArray = [];
        for (let book of response.json().items) booksArray.push(new Book(book));

        return booksArray;
      });
  }
}
