import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/home.scss']
})
/*
 * @class Represents Home Page
 */
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

}
