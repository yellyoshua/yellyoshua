import { SocialLink, Asset } from './interfaces';

export interface ApplicationReducer {
	name: string;
	API_URL?: string;
	socialLinks: SocialLink[];
	copyright: string;
	projects: Project[];
}

export interface Project {
	id: string;
	title: string;
	slug: string;
	description: string;
	content: { html?: string } | null;
	isDevelopment: boolean;
	externalLink: string | null;
	backdrop: Asset | null;
	repository: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface ProjectWithSlug {
	slug: string;
}
