import { makeHygraphRequest } from '../config';
import type { Project, ProjectWithSlug } from '@/app/interfaces';
import * as query from './graphql-queries';

export default {
	async getAllProjects(): Promise<Project[]> {
		const response = await makeHygraphRequest({
			query: query.GET_ALL_PROJECTS,
		});
		const data = await response.json();
		return data.data.projects;
	},

	async getProjectBySlug(slug: string): Promise<Project> {
		const response = await makeHygraphRequest({
			query: query.GET_PROJECT_BY_SLUG,
			variables: { slug },
		});

		const data = await response.json();
		return data.data.project;
	},

	async getProjectsSlug(): Promise<ProjectWithSlug[]> {
		const response = await makeHygraphRequest({
			query: query.GET_PROJECTS_SLUG,
		});
		const data = await response.json();
		return data.data.projects;
	},
};
