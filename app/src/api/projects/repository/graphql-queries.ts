import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = gql`
	query {
		projects {
			id
			title
			slug
			description
			isDevelopment
			externalLink
			keywords
			backdrop {
				...backdropFields
			}
			repository
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

export const GET_PROJECTS_SLUG = gql`
	query {
		projects {
			slug
		}
	}
`;

export const GET_PROJECT_BY_SLUG = gql`
	query getProjectBySlug($slug: String!) {
		project(where: { slug: $slug }) {
			id
			title
			slug
			description
			keywords
			content {
				html
			}
			isDevelopment
			externalLink
			backdrop {
				...backdropFields
			}
			repository
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
