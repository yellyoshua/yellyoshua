export interface PageWithSlug {
	slug: string;
}

export interface Page {
	name: string;
	slug: string;
	title: string;
	description: string;
	content: string | null;
	richContent: {
		markdown?: string;
		html?: string;
		text?: string;
	} | null;
}

export interface PagesReducer {
	pagesRecommendation: Page[];
}
