export interface PageWithSlug {
	slug: string;
}

export interface Page {
	name: string;
	slug: string;
	title: string;
	description: string;
	content: {
		markdown?: string;
		html?: string;
		text?: string;
	} | null;
}

export interface PagesReducer {
	pagesRecommendation: Page[];
}
