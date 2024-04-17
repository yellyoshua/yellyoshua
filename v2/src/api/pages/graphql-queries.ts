export const GET_PAGES_SLUG = `
	query {
		pages {
			slug
		}
	}
`;

export const GET_PAGE_BY_SLUG = `
	query getPageBySlug($slug: String!) {
		page(where: { slug: $slug }) {
			id
			slug
			title
			backdrop {
				...backdropFields
			}
			content {
				html
			}
			createdAt
			updatedAt
		}
	}

	fragment backdropFields on Asset {
		height
		width
		url
		fileName
	}
`;

export const GET_PAGES_RECOMMENDATION = `
	query pagesRecommendation($slug: String!, $first: Int!) {
		pages(where: { slug_not: $slug }, first: $first) {
			id
			slug
			title
			backdrop {
				...backdropFields
			}
			createdAt
			updatedAt
		}
	}

	fragment backdropFields on Asset {
		height
		width
		url
		fileName
	}
`;
