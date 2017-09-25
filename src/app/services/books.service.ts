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
  public url: string = 'https://www.googleapis.com/books/v1/volumes';
  public start: number = 0;
  public step: number = 12;

  constructor(private http: Http) {
  }

  /*
   *
   * Fetch books from google api
   * @param {boolean} isScrolling - reset search params if true
   * @returns {Observable}
   *
   */
  public get (str: string = 'flashpoint', isScrolling: boolean = false): Observable<Book[]> {
    this.start = isScrolling ? (this.start + this.step) : 0;

    const url = `${this.url}?q=${str}&startIndex=${this.start}&maxResults=${this.step}`;

    return this.http
      .get(url)
      .map(response => {
        const booksArray = [];
        const data = response.json();

        if (!response || !data || !data.items) return booksArray;

        data.items.forEach(item => booksArray.push(new Book(item)));

        return booksArray;
      });
  }
}
