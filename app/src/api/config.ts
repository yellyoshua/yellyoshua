import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const ssrMode = typeof window === 'undefined';

const createHttpLink = () => {
	return new HttpLink({
		uri: process.env.NEXT_PUBLIC_API_URI,
		headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
	});
};

export const GraphQLClient = () => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		ssrMode,
		link: createHttpLink(),
	});
};
