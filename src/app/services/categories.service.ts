import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/bundles/Rx.min';


/*
 * @class Represents Book Service
 */
@Injectable()
export class CategoriesService {
  /**
   * Runs before the saveBook method
   * to remove a book from all categories
   * when the Save button is pressed
   *
   * @param {Object} book - the book which are looked at the moment
   * @returns {Observable} - contains void
   *
   */
  removeBook(book) {
    return Observable.create((observer) => {
      let categories = [];
      this.getCategories().subscribe(data => categories = data);
      for (let item of categories) {
        if (localStorage[item]) observer.next([item, JSON.parse(`[${localStorage[item]}]`)]);
      }
    })
      .do(val => {
        let el = (val[1].find((item) => { return item.id === book.id }));
        let result;
        if (el) {
          val[1].splice(val[1].indexOf(el), 1);
          result = JSON.stringify(val[1]);
          localStorage[val[0]] = result.slice(0, -1).slice(1);
        }
      })
  };

  /**
   * Runs when the Save button
   * is pressed and writes a book
   * to the repository if the
   * categories were selected
   *
   * @param {String[]} categories - list of selected categories for saving
   * @param {Object} book - the book which are looked at the moment
   * @returns {Observable} - contains void
   *
   */
  saveBook(categories, book) {
    return Observable.create((observer) => {
      for (let item of categories) {
        if (localStorage[item]) {
          localStorage.setItem(item, `${localStorage[item]}, ${JSON.stringify(book)}`);
        } else {
          localStorage.setItem(item, `${JSON.stringify(book)}`);
        }
      }
    })
  };
  /**
   * Adds a new empty category to local storage,
   * runs when the button has pressed
   *
   * @param  {String} newCategory - name of the new category
   * @returns {Observable} - contains void
   *
   */
  setCategory(newCategory) {
    return Observable.create((observer) => {
      if (!localStorage[newCategory]) {
        localStorage.setItem(`${newCategory}`, '')
      }
    });
  };
  /**
   * Runs when you need to get a list of
   * all categories from the local storage
   *
   * @returns {Observable} - contains list of all saved categories
   */

  getCategories() {
    let arr = ['key', 'getItem', 'setItem', 'removeItem', 'clear', 'length'];
    return Observable.create((observer) => {
      for (let key in localStorage) {
        if (arr.indexOf(key) === -1) observer.next(key);
      }
    })
      .bufferCount(localStorage.length);
  };

  /**
   * Checks for books in a certain category
   *
   * @param  {Object} book - book for checking
   * @param  {String} category - name of category in local storage for checking
   * @returns {Observable} - contains the book if it belongs to a category,
   * if no - contains void
   */
  find(book, category) {
    return Observable.create(observer => {
      let el = JSON.parse(`[${localStorage[category]}]`).find((item) => {
        return item.id === book.id;
      });
      observer.next(el)
    })
  };

  /**
   * Get books from certain category
   *
   * @param  {String} category - name of category in local storage
   * @returns {Observable} - contains list of books from certain category
   */
  getBooks(category) {
    return Observable.create(observer => {
      JSON.parse(`[${localStorage[category]}]`).forEach(book => observer.next(book))
    })
      .bufferCount(JSON.parse(`[${localStorage[category]}]`).length);
  };

  /**
   * Get books from all categories
   *
   * @returns {Observable} - list of books from all categories
   */
  getAllBooks() {
    return this.getCategories()
      .mergeMap(data => {
        return Observable.create(observer => {
          let books = [];
          data.forEach(category => {
            JSON.parse(`[${localStorage[category]}]`).forEach(data => {
              books.push(data);
            });
          });
          observer.next(books)
        })
      })
      .map(books => {
        let unique = [];
        for (let book of books) {
          let el = unique.find(item => { return item.id === book.id })
          if (!el) unique.push(book);
        }
        return unique;
      })

  };

  /**
   * Remove category or all categories from localStorage
   *
   * @param {String} category - name of category in local storage
   * @returns {Observable} - contains void
   *
   */
  remove(category) {
    return Observable.create((observer) => {
      (category === 'All') ? localStorage.clear() : localStorage.removeItem(category);
    });
  }
}
