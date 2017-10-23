import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { OAuthService } from '../../pages/oauth/oauth.service';

import { OAuthProvidersListPage } from './list/oauth-providers.list.page';
import { OAuthProfilePage } from './profile/oauth-profile.page';
import { GoogleOauthProvider } from './google/google-oauth.provider';
import { FacebookOauthProvider } from './facebook/facebook-oauth.provider';
import { Config } from '../../../config';

@NgModule({
	imports: [IonicModule],
	declarations: [
		OAuthProvidersListPage,
		OAuthProfilePage
	],
	entryComponents: [
		OAuthProvidersListPage,
		OAuthProfilePage
	],
	providers: [
		OAuthService,
		GoogleOauthProvider,
		FacebookOauthProvider,
		Config
	]
})
export class OAuthModule {
}
