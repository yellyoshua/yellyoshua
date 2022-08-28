import { Asset } from './interfaces';

export interface PageWithSlug {
	slug: string;
}

export interface Page {
	id: string;
	slug: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	backdrop: Asset | null;
	content: { html?: string } | null;
}

// TODO: Remove this interface when no longer needed.
export interface PagesReducer {
	pagesRecommendation: Page[];
	pageContent: Page | null;
}

export interface PageReducer {
	recommendations: Page[];
	content: Page | null;
}
