import { ProjectsRepository } from '@/app/api/projects/repository';
import { Project, ProjectWithSlug } from '@/app/interfaces';

export class ProjectsController {
	private projectsRepository: ProjectsRepository;

	constructor() {
		this.projectsRepository = new ProjectsRepository();
	}

	async getAllProjects(): Promise<Project[]> {
		const { data } = await this.projectsRepository.getAllProjects();

		const { projects = null } = data || {};

		if (projects === null) {
			return [];
		}

		return projects;
	}

	async getProjectBySlug(slug: string): Promise<Project> {
		const { data } = await this.projectsRepository.getProjectBySlug(slug);
		const { project = null } = data || {};
		return project;
	}

	async getProjectsSlug(): Promise<ProjectWithSlug[]> {
		const { data } = await this.projectsRepository.getProjectsSlug();

		const { projects = null } = data || {};

		if (projects === null) {
			return [];
		}

		return projects;
	}
}
