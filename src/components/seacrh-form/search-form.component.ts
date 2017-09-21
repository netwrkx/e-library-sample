import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../models';
import {BooksService} from '../../services';

@Component({
  selector: 'search-form',
  templateUrl: 'search-form.html'
})
/*
 * @class Represents Search Form Component
 */
export class SearchFormComponent {

  public searchQuery: string;
  public bookItems: Array<Book>;

  constructor(private booksService: BooksService, public navCtrl: NavController) {
    // let searchValue = document.getElementById('search') as HTMLInputElement;
    // this.searchQuery = searchValue.value;
    booksService.get(this.searchQuery).subscribe(books => this.bookItems = books);
    console.log(this.searchQuery);
  }
  setSearchParams(event: any){
  }

}
