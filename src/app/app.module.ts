import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
// Pages
import {
  HomePage,
  BooksDetailsPage,
  FavoritesPage,
  SearchPage,
  SignInPage
} from '../pages';
// Custom components
import {
  SearchFormComponent,
  BookItemComponent,
  BooksListComponent
} from '../components';
// Tabs component
import {TabsPage} from '../pages/tabs/tabs';
// Custom services
import {BooksService} from '../services';
// Ionic providers
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
// Angular providers
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    BooksDetailsPage,
    FavoritesPage,
    SearchPage,
    HomePage,
    TabsPage,
    SearchFormComponent,
    BookItemComponent,
    BooksListComponent,
    SignInPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BooksDetailsPage,
    FavoritesPage,
    SearchPage,
    HomePage,
    SignInPage,
    TabsPage,
    SearchFormComponent,
    BookItemComponent,
    BooksListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
}
