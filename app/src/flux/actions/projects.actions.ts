import { GET_ALL_PROJECTS } from "@/app/api/projects/graphql-queries"
import { useProjectsStore } from "@/app/flux/stores"
import { GraphQLClient } from "@/app/api/config"
import { Project } from "@/app/interfaces"

const client = GraphQLClient()

export const getAllProjects = async (dispatch: boolean = true): Promise<Project[]> => {
  try {
    const result = await client.query({ query: GET_ALL_PROJECTS })
    const { projects = [] } = result.data || {};
    dispatch && useProjectsStore.setState((prev) => ({ ...prev, projects }))
    return projects
  } catch (error) {
    dispatch && useProjectsStore.setState((prev) => ({ ...prev, projects: [] }))
    return []
  }
}