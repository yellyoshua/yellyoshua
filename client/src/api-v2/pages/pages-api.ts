import { makeHygraphRequest } from '../config';
import type { Page, PageWithSlug } from '@/app/interfaces';
import * as query from './graphql-queries';

export default {
	async getPagesSlug(): Promise<PageWithSlug[]> {
		const response = await makeHygraphRequest({ query: query.GET_PAGES_SLUG });
		const data = await response.json();
		return data.data.pages;
	},
	async getPageBySlug(slug: string): Promise<Page> {
		const response = await makeHygraphRequest({
			query: query.GET_PAGE_BY_SLUG,
			variables: { slug },
		});

		const data = await response.json();
		return data.data.page;
	},
	async getPagesRecommendation(slug: string, limit?: number): Promise<Page[]> {
		const response = await makeHygraphRequest({
			query: query.GET_PAGES_RECOMMENDATION,
			variables: { slug, first: limit ?? 10 },
		});

		const data = await response.json();
		return data.data.pages;
	},
};
