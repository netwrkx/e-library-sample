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
   *
   */
  removeBook(book) {
    let del = (e, i) => {
      let val = JSON.parse(`[${localStorage[i]}]`);
      let result;
      val.splice(val.indexOf(e), 1);
      result = JSON.stringify(val).slice(1, JSON.stringify(val).length - 1);
      if (result === '[]') { result = '' } else result;
      return result;
    };
    let categories = [];
    this.getCategories().subscribe(data => categories = data);
    for (let item of categories) {
      let el = this.find(book, item);
      if (el) {
        localStorage.setItem(item, del(el, item))
      };
    }
  };

  /**
   * Runs when the Save button
   * is pressed and writes a book
   * to the repository if the
   * categories were selected
   *
   * @param {String[]} categories - list of selected categories for saving
   * @param {Object} book - the book which are looked at the moment
   *
   */
  saveBook(categories, book) {
    for (let item of categories) {
      if (localStorage[item]) {
        if (this.find(book, item)) return;
        localStorage.setItem(item, `${localStorage[item]}, ${JSON.stringify(book)}`);
      } else {
        localStorage.setItem(item, `${JSON.stringify(book)}`);
      }
    }
  };
  /**
   * Adds a new empty category to local storage,
   * runs when the button has pressed
   *
   * @param  {String} newCategory - name of the new category
   *
   */
  setCategory(newCategory) {
    if (!localStorage[newCategory]) {
      localStorage.setItem(`${newCategory}`, '')
    };
  };
  /**
   * Runs when you need to get a list of
   * all categories from the local storage
   *
   * @return {String[]} categories - list of all saved categories
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
   * @return {Object} el - if If the book belongs to a category,
   * it returns it, if no returns undefind
   */
  find(book, category) {
    let el = JSON.parse(`[${localStorage[category]}]`).find((item) => {
      return item.id === book.id;
    });
    return el;
  };

  /**
   * Get books from certain category
   *
   * @param  {String} category - name of category in local storage
   * @return {Object[]} books - list of books from certain category
   */
  getBooks(category) {
    let books = JSON.parse(`[${localStorage[category]}]`);
    return books;
  };

  /**
   * Get books from all categories
   *
   * @return {Object[]} books - list of books from all categories
   */
  getAllBooks() {
    let categories = [];
    let books = [];
    this.getCategories().subscribe(data => categories = data);
    categories.map(item => {
      let category = JSON.parse(`[${localStorage[item]}]`);
      category.map(i => {
        if (books.indexOf(i) === -1) books.push(i);
      })
    })
    return books;
  };

  /**
   * Remove category or all categories from localStorage
   *
   * @param {String} category - name of category in local storage
   *
   */
  remove(category) {
    (category === 'All') ? localStorage.clear() : localStorage.removeItem(category);
  }
}
