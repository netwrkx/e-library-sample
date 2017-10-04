import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'search-form',
  templateUrl: 'search-form.html'
})
/*
 * @class Represents Search Form Component
 */
export class SearchFormComponent {
  @Output() searchUpdate = new EventEmitter();
  search: string;
  // TODO: output with search text
  constructor() {
  }
  setSearchParams(){
    this.searchUpdate.emit(this.search);
  }
}
