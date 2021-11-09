import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { Layout, Projects, SortResumeAboutMe } from '@/app/ui/index';
import { useProjectsStore } from '@/app/flux/stores';
import { getAllProjects } from '@/app/flux/actions';
import { Project } from '@/app/interfaces';
interface HomePageProps {
	projects: Project[];
}

export default function HomePage({ projects = [] }: HomePageProps) {
	useEffect(() => {
		projects && useProjectsStore.setState((prev) => ({ ...prev, projects }));
	}, []);

	return (
		<Layout>
			<SortResumeAboutMe />
			<Projects />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({}) => {
	const projects: Project[] = await getAllProjects();

	return {
		props: { projects },
		revalidate: 900,
	};
};
