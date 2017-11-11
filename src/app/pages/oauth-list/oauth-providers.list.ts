import {Component, EventEmitter, OnInit} from '@angular/core';
import { SessionService } from './../../services';

@Component({
  selector: 'oauth-providers',
  templateUrl: 'oauth-providers.list.html',
  styleUrls: ['/oauth-providers.list.scss']
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
        .then(result => {
          this.sessionCheck();
        })
        .catch(error => console.log(error));
    }
  }

  sessionCheck(){
    this.currentLogIn = this.session.check();
  }
}
