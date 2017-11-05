import {Injectable} from '@angular/core';
import firebase from 'firebase'

@Injectable()
export class SessionService {

  loginFB(){
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }

  logout(){
    return firebase.auth().signOut();
  }

  check(){
    return firebase.auth().currentUser;
  }
}
