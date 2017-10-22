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
    let book;
    this.categoriesService.find(this.book, item).subscribe(item => book = item);
    let status = (book) ? true : false;
    return status;
  }

  closeModal(option) {
    if (option != 'cancel' && option) {
      this.categoriesService.removeBook(this.book).subscribe();
      this.categoriesService.saveBook(option, this.book).subscribe();
    }
    this.viewCtrl.dismiss();
  }

  addNew() {
    if (this.category) this.categoriesService.setCategory(this.category).subscribe();
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }
}
