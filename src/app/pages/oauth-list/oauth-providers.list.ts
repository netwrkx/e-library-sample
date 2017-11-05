import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase'

@Component({
  templateUrl: 'oauth-providers.list.html'
})
export class OauthProvidersListPage implements OnInit{
  currentLogIn;
  constructor(private nav: NavController){}
  ngOnInit(){
    this.sessionCheck();
  }

  login(source: string){
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(result => {
        this.sessionCheck()
      }).catch(error => console.log(error));
  }
  logout(){
    firebase.auth().signOut()
      .then(() => this.sessionCheck())
      .catch(error => console.log(error));

  }
  sessionCheck(){
    this.currentLogIn = firebase.auth().currentUser;
  }
}
