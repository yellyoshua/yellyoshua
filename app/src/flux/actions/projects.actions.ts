import { ProjectsController } from '@/app/api/projects/controllers';
import { Project } from '@/app/interfaces';

const projectsController = new ProjectsController()

export const getAllProjects = async (): Promise<Project[]> => {
	const projects = await projectsController.getAllProjects()
	return projects
};
