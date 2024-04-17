import type { Asset } from './interfaces';

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
