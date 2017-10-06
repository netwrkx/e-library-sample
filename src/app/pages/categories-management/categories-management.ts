import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Book } from '../../models';
import { CategoriesService } from '../../services';


@Component({
  selector: 'categories-management',
  templateUrl: 'categories-management.html',
  styleUrls: ['/categories-management.scss']
})

/*
 *@class Represents Book Details Page
 */
export class CategoriesManagement {
  public book: Book;
  private categories: string[] = [];
  private category: string;

  constructor(private params: NavParams, private viewCtrl: ViewController, private categoryService: CategoriesService) {
    this.book = this.params.get('book');
    this.categories = this.categoryService.getCategories();
  }
  select(item) {
    let status = (this.categoryService.find(this.book, item)) ? true : false;
    return status;
  }

  closeModal(status) {
    if (status != 'cancel') {
      this.categoryService.removeBook(this.book);
      if (status) this.categoryService.saveBook(status, this.book);      
    }
    this.viewCtrl.dismiss();
  }

  addNew() {
    if (this.category) this.categoryService.setCategory(this.category);
    this.categories = this.categoryService.getCategories();
  }
}
