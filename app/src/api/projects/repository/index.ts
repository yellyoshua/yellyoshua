import { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import * as query from "./graphql-queries"
import { GraphQLClient } from "../../config"

export class ProjectsRepository {
  private api: ApolloClient<NormalizedCacheObject>

  constructor() {
    this.api = GraphQLClient()
  }

  getAllProjects() {
    return this.api.query({ query: query.GET_ALL_PROJECTS })
  }
}