import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = gql`
	query {
		projects {
			id
			title
			slug
			description
			content {
				markdown
			}
			isDevelopment
			externalLink
			backdrop {
				url
				height
				width
				size
			}
			repository
		}
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
			content {
				markdown
			}
			isDevelopment
			externalLink
			backdrop {
				url
				height
				width
				size
			}
			repository
		}
	}
`;
