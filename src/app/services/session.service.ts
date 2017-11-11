import {EventEmitter, Injectable} from '@angular/core';
import firebase from 'firebase'

@Injectable()
export class SessionService {
  updateSession: EventEmitter<any> = new EventEmitter<any>();

  loginFB(){
    const provider = new firebase.auth.FacebookAuthProvider();
    this.verifyUser();
    return firebase.auth().signInWithPopup(provider);
  }

  logout(){
    this.verifyUser();
    return firebase.auth().signOut();
  }

  check(){
    return firebase.auth().currentUser;
  }

  verifyUser() {
    firebase.auth().onAuthStateChanged(user => {
      this.updateSession.emit(!!user);
    });
  }
}
