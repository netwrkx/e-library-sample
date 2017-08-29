import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Book} from '../models';

// TODO: Add here fake data from google api
const fakeResult = {};

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
  public get (): Observable<Book[]> {
    // TODO: Implement me (later)
    // return this.http.get('url/to/books');
    return Observable.of(fakeResult).map(result => {
      // TODO: Perform actions on result
      // TODO: Get books info for it and wrap each item into Book model
      // TODO: Return array of Book models
      return [];
    });
  }
}
