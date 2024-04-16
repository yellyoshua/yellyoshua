import { GetStaticProps } from 'next';
import { Project } from '@/app/interfaces';
import projectsApi from '@/app/api-v2/projects/projects-api';
import { TIMEOUT_TIMES } from '@/app/enums/app';
import MainLayout from '@/app/layouts/MainLayout';
import Projects from '@/app/scenes/Projects';
import QuickResume from '@/app/scenes/QuickResume';

interface PropTypes {
	projects: Project[];
}

export default function HomePage({ projects = [] }: PropTypes) {
	return (
		<MainLayout>
			<QuickResume />
			<Projects projects={projects} />
		</MainLayout>
	);
}

export const getStaticProps: GetStaticProps<PropTypes> = async ({}) => {
	const projects = await projectsApi.getAllProjects();

	return {
		props: { projects },
		revalidate: TIMEOUT_TIMES.MINUTE_IN_SECONDS,
	};
};
