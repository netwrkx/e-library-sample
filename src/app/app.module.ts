import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {ELibraryApp} from './app.component';
// Pages
import {
  HomePage,
  BooksDetailsPage,
  CategoriesPage,
  SearchPage,
  CategoriesManagementPage,
  CategoriesDetailsPage,
  OauthProvidersListPage
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
import {BooksService, CategoriesService} from './services';
// Ionic providers
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
// Angular providers
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    ELibraryApp,
    BooksDetailsPage,
    CategoriesPage,
    SearchPage,
    HomePage,
    TabsPage,
    SearchFormComponent,
    BookItemComponent,
    BooksListComponent,
    CategoriesDetailsPage,
    CategoriesManagementPage,
    OauthProvidersListPage
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
    CategoriesPage,
    SearchPage,
    HomePage,
    TabsPage,
    SearchFormComponent,
    BookItemComponent,
    BooksListComponent,
    CategoriesDetailsPage,
    CategoriesManagementPage,
    OauthProvidersListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksService,
    CategoriesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
}
