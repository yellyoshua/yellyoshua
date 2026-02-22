export const GET_ALL_PROJECTS = `
	query {
		projects {
			id
			title
			slug
			description
			isDevelopment
			projectStatus
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

export const GET_PROJECTS_SLUG = `
	query {
		projects {
			slug
		}
	}
`;

export const GET_PROJECT_BY_SLUG = `
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
			projectStatus
			externalLink
			backdrop {
				...backdropFields
			}
			previews {
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
