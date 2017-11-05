import {Component, OnInit} from '@angular/core';
import { SessionService } from './../../services'

@Component({
  templateUrl: 'oauth-providers.list.html'
})
export class OauthProvidersListPage implements OnInit{
  currentLogIn;
  constructor(private session: SessionService){}
  ngOnInit(){
    this.sessionCheck();
  }

  login(source: string){
    if (source === 'facebook'){
      this.session.loginFB()
        .then(result => this.sessionCheck())
        .catch(error => console.log(error));
    }
  }
  logout(){
    this.session.logout()
      .then(() => this.sessionCheck())
      .catch(error => console.log(error));
  }
  sessionCheck(){
    this.currentLogIn = this.session.check();
  }
}
