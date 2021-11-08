import { GET_ALL_PROJECTS } from '@/app/api/projects/graphql-queries';
import { GraphQLClient } from '@/app/api/config';
const client = GraphQLClient();

export const getFullPageContent = () => {
	client.query({ query: GET_ALL_PROJECTS });
};
