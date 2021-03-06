import { ProjectsRepository } from '@/app/api/projects/repository';
import { Project, ProjectWithSlug } from '@/app/interfaces';

export class ProjectsController {
	private projectsRepository: ProjectsRepository;

	constructor() {
		this.projectsRepository = new ProjectsRepository();
	}

	async getAllProjects(): Promise<Project[]> {
		const { data } = await this.projectsRepository.getAllProjects();
		const { projects = [] } = data || {};

		return projects;
	}

	async getProjectBySlug(slug: string): Promise<Project> {
		const { data } = await this.projectsRepository.getProjectBySlug(slug);
		const { project = null } = data || {};
		if (!project) throw new Error(`project ${slug} not found`);
		return project;
	}

	async getProjectsSlug(): Promise<ProjectWithSlug[]> {
		const { data } = await this.projectsRepository.getProjectsSlug();
		const { projects = [] } = data || {};

		return projects;
	}
}
