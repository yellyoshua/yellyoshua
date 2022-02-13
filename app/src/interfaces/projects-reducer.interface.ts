import { Asset } from './interfaces';

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

export interface ProjectsReducer {
	projects: Project[];
}
