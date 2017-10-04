import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  public facebook = {
    apiUrl: 'https://graph.facebook.com/v2.10/',
    appId: '162881460959624',
    scope: ['email']
  };
  public google = {
    apiUrl: 'https://www.googleapis.com/oauth2/v3/',
    appId: 'hufffk786',
    scope: ['email']
  };
}
