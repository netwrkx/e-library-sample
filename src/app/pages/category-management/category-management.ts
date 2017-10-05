import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Book } from '../../models';
import { CategoryService } from '../../services';


@Component({
  selector: 'category-management',
  templateUrl: 'category-management.html',
  styleUrls: ['/category-management.scss']
})

/*
 *@class Represents Book Details Page
 */
export class CategoryManagement {
  public book: Book;
  private categories: string[] = [];
  private category: string;
  private selected: boolean = false;

  constructor(private params: NavParams, private viewCtrl: ViewController, private categoryServ: CategoryService) {
    this.book = params.get('book');
    this.categories = this.categoryServ.getCategories();
  }
  select(item) {
    //console.log(this.categoryServ.find(this.book, item));
    let status = (this.categoryServ.find(this.book, item)) ? true : false;
    //console.log(status);
    return status;
  }

  closeModal(status) {
    if (status === 'cancel') {
      this.viewCtrl.dismiss();
    } else {
      this.categoryServ.removeBook(this.book)
      this.viewCtrl.dismiss();
      if (status) {
        this.categoryServ.saveBook(status, this.book);
      }
    }
  }

  addNew() {
    if (this.category) this.categoryServ.setCategory(this.category);
    this.categories = this.categoryServ.getCategories();
  }
}
