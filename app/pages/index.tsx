import { GetStaticProps } from 'next';
import { Project } from '@/app/interfaces';
import { ProjectsController } from '@/app/api/projects/controllers';
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

const projectsController = new ProjectsController();

export const getStaticProps: GetStaticProps<PropTypes> = async ({}) => {
	const projects = await projectsController.getAllProjects();

	return {
		props: { projects },
		revalidate: TIMEOUT_TIMES.FIFTEEN_MINUTES_IN_SECONDS,
	};
};
