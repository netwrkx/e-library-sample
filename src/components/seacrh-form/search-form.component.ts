import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Book } from '../../models';

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

  constructor(public navCtrl: NavController) {
  }
  setSearchParams(event){
  }

}
