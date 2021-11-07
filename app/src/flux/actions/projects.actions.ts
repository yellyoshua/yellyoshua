import { GET_ALL_PROJECTS } from "@/app/api/projects/graphql-queries"
import { useProjectsStore } from "@/app/flux/stores"
import { GraphQLClient } from "@/app/api/config"

const client = GraphQLClient()

export const getAllProjects = async () => {
  try {
    const result = await client.query({ query: GET_ALL_PROJECTS })
    const { projects = [] } = result.data || {};
    useProjectsStore.setState((prev) => ({ ...prev, projects }))
  } catch (error) {
    useProjectsStore.setState((prev) => ({ ...prev, projects: [] }))
  }
}