import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import firebase from 'firebase'

// import {TabsPage} from './pages/tabs/tabs';
import {HomePage, OauthProvidersListPage} from './pages';
import {SessionService} from './services';

@Component({
  templateUrl: 'app.html',
  styleUrls: ['/app.scss']
})
export class ELibraryApp {
  rootPage: any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private session: SessionService) {
    firebase.initializeApp({
      apiKey: "AIzaSyBKpCPzk0hVAR8A4nyfX92f-z1XaUfiCcU",
      authDomain: "e-library-sample.firebaseapp.com",
      databaseURL: "https://e-library-sample.firebaseio.com",
      projectId: "e-library-sample",
      storageBucket: "e-library-sample.appspot.com",
      messagingSenderId: "103463952418"
    });
    this.session.verifyUser();
    this.session.updateSession.subscribe((user) => {
      this.changeRoot(user);
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  changeRoot(user){
    (user) ? this.rootPage = HomePage : this.rootPage = OauthProvidersListPage;
  }
}
