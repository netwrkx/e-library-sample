import {Component} from '@angular/core';

@Component({
  selector: 'search-page',
  templateUrl: 'search.html'
})
/*
 * @class Represents Search Page
 */
export class SearchPage {
  public text: string;

  /*
   * Basic setup
   */
  constructor() {
  }

  // TODO: bind output from search to this method
  onSearch() {
    this.text = 'test';
  }
}
