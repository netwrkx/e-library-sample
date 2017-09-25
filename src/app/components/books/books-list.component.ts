import {Component, Input} from '@angular/core';
import {Book} from '../../models';
import {BooksService} from '../../services';

@Component({
  selector: 'books-list',
  templateUrl: 'books-list.html'
})
/*
 * @class Represents Book List Component
 * @param {Object[]} - array of the books
 */
export class BooksListComponent {
  @Input('text') set reset(value: string) {
    this.searchString = value;
    this.books = [];

    this.load();
  };

  public books: Array<Book> = [];
  public searchString: string;

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.load();
  }

  load(infiniteScroll = null) {
    this.booksService.get(this.searchString, !!infiniteScroll).subscribe(books => {
      if(infiniteScroll) infiniteScroll.complete();

      this.books = [...this.books, ...books];
    });
  }
}
