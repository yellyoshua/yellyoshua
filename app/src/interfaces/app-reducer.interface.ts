import { SocialLink } from './interfaces';

export interface AppReducer {
	name: string;
	API_URL?: string;
	socialLinks: SocialLink[];
	copyright: string;
}
