import { Injectable } from '@angular/core';

/*
 * @class Represents Book Service
 */
@Injectable()
export class CategoryService {

  removeBook(book) {
    let del = (e, i) => {
      let val = JSON.parse(`[${localStorage[i]}]`);
      let result;
      val.splice(val.indexOf(e), 1);
      result = JSON.stringify(val)
      if (result === '[]') { result = '' } else { result.substr(0, 1).substr(-1, 1) };
      return result;
    }
    let categories = this.getCategories();
    for (let item of categories) {
      let el = this.find(book, item);
      if (el) {
        localStorage.setItem(item, del(el, item))
      };
    }
  };

  setCategory(newCategory) {
    if (!localStorage[newCategory]) {
      localStorage.setItem(`${newCategory}`, '')
    };
  };
  getCategories() {
    let categories = [];
    let arr = ['key', 'getItem', 'setItem', 'removeItem', 'clear', 'length'];
    for (let key in localStorage) {
      if (categories.indexOf(key) === -1) categories.push(key);
    };
    for (let key of arr) {
      if (categories.indexOf(key) > 0) categories.splice(categories.indexOf(key), 1);
    };
    return categories;
  };

  saveBook(categoryes, book) {
    for (let item of categoryes) {
      if (localStorage[item]) {
        if (this.find(book, item)) return;
        localStorage.setItem(item, `${localStorage[item]}, ${JSON.stringify(book)}`);
      } else {
        localStorage.setItem(item, `${JSON.stringify(book)}`);
      }
    }
  };

  find(book, item) {
    let el = JSON.parse(`[${localStorage[item]}]`).find((item) => {
      return item.id === book.id;
    });
    return el;
  };

  getBooks(item) {    
    let books = JSON.parse(`[${localStorage[item]}]`);
    return books;
   };

  getAllBooks() {
    let categories = this.getCategories();
    let books = [];
    categories.map(item => {
      let category = JSON.parse(`[${localStorage[item]}]`);
      category.map(i => {
        if (books.indexOf(i) === -1) books.push(i);
      })
    })
    return books;
  };

}
