import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {ELibraryApp} from './app.component';
import {OAuthModule} from './pages/oauth/oauth.module';
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
  BooksListComponent
} from './components';
// Tabs component
import {TabsPage} from './pages/tabs/tabs';
// Custom services
import {BooksService} from './services';
import { OAuthService } from './pages/oauth/oauth.service';
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
    BooksListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(ELibraryApp),
    OAuthModule
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
    BooksListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OAuthService
  ]
})

export class AppModule {
}
