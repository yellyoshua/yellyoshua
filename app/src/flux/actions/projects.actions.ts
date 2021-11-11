import { ProjectsController } from '@/app/api/projects/controllers';
import { Project } from '@/app/interfaces';

const projectsController = new ProjectsController();

export const getAllProjects = async (): Promise<Project[]> => {
	return projectsController.getAllProjects();
};

export const getProjectBySlug = (slug: string): Promise<Project> => {
	return projectsController.getProjectBySlug(slug);
};

export const getProjectsWithSlug = () => {
	return projectsController.getProjectsSlug();
};
