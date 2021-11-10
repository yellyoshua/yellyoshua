import { gql } from '@apollo/client';

export const GET_PAGES_SLUG = gql`
	query {
		pages {
			slug
		}
	}
`;

export const GET_PAGE_BY_SLUG = gql`
	query getPageBySlug($slug: String!) {
		page(where: { slug: $slug }) {
			slug
			name
			title
			description
			content {
				markdown
			}
		}
	}
`;

export const GET_PAGES_RECOMMENDATION = gql`
	query pagesRecommendation($slug: String!) {
		pages(where: { slug_not: $slug }) {
			id
			title
			name
			slug
			description
		}
	}
`;
