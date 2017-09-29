import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {ELibraryApp} from './app.component';
// Pages
import {
  HomePage,
  BooksDetailsPage,
  FavoritesPage,
  SearchPage
} from './pages';
// Custom components
import {
  SearchFormComponent,
  BookItemComponent,
  BooksListComponent,
  FavoriteListComponent
} from './components';
// Tabs component
import {TabsPage} from './pages/tabs/tabs';
// Custom services
import {BooksService, FavoriteSwichService} from './services';
// Ionic providers
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
// Angular providers
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    ELibraryApp,
    BooksDetailsPage,
    FavoritesPage,
    SearchPage,
    HomePage,
    TabsPage,
    SearchFormComponent,
    BookItemComponent,
    BooksListComponent,
    FavoriteListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(ELibraryApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ELibraryApp,
    BooksDetailsPage,
    FavoritesPage,
    SearchPage,
    HomePage,
    TabsPage,
    SearchFormComponent,
    BookItemComponent,
    BooksListComponent,
    FavoriteListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksService,
    FavoriteSwichService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
}
