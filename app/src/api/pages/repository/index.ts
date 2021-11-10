import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import * as query from './graphql-queries';
import { GraphQLClient } from '../../config';

export class PagesRepository {
	private api: ApolloClient<NormalizedCacheObject>;

	constructor() {
		this.api = GraphQLClient();
	}

	getPagesSlug() {
		return this.api.query({ query: query.GET_PAGES_SLUG });
	}

	getPageBySlug(slug: string) {
		return this.api.query({
			query: query.GET_PAGE_BY_SLUG,
			variables: { slug },
		});
	}

	getPagesRecommendation(slug: string) {
		return this.api.query({
			query: query.GET_PAGES_RECOMMENDATION,
			variables: { slug },
		});
	}
}
