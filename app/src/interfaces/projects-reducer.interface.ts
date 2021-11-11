export interface Project {
	id: string;
	title: string;
	slug: string;
	description: string;
	content: {
		html?: string;
		json?: string;
		markdown?: string;
		text?: string;
	} | null;
	isDevelopment: boolean;
	externalLink: string | null;
	backdrop: {
		url: string;
		height: number;
		width: number;
		size: number;
	} | null;
	repository: string | null;
}

export interface ProjectWithSlug {
	slug: string;
}

export interface ProjectsReducer {
	projects: Project[];
}
