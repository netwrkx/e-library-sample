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
export class CategoriesManagementPage {
  public book: Book;
  private categories: string[] = [];
  private category: string;

  constructor(private params: NavParams, private viewCtrl: ViewController, private categoriesService: CategoriesService) {
    this.book = this.params.get('book');
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }
  select(item) {
    let status = (this.categoriesService.find(this.book, item)) ? true : false;
    return status;
  }

  closeModal(status) {
    if (status != 'cancel') {
      this.categoriesService.removeBook(this.book);
      if (status) this.categoriesService.saveBook(status, this.book);
    }
    this.viewCtrl.dismiss();
  }

  addNew() {
    if (this.category) this.categoriesService.setCategory(this.category);
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }
}
