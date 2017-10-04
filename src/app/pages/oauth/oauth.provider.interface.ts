import { OAuthProfile } from './models/oauth-profile.model';
import { OAuthToken } from './models/oauth-token.model';

export interface IOathProvider {
	login(): Promise<string>;
	getProfile(accessToken: string): Promise<OAuthProfile>;
}
