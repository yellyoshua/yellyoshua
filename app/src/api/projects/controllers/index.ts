import { ProjectsRepository } from "@/app/api/projects/repository"
import { Project } from "@/app/interfaces"

export class ProjectsController {
  private projectsRepository: ProjectsRepository

  constructor() {
    this.projectsRepository = new ProjectsRepository()
  }

  async getAllProjects(): Promise<Project[]> {
    const { data } = await this.projectsRepository.getAllProjects()

    const { projects = null } = data || {}

    if (projects === null) {
      return []
    }

    return projects
  }
}