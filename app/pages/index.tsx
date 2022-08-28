import { GetStaticProps } from 'next';
import { Layout, Projects, SortResumeAboutMe } from '@/app/ui/index';
import { Project } from '@/app/interfaces';
import { ProjectsController } from '@/app/api/projects/controllers';
import { ApplicationProvider } from '@/app/store/Providers';
import { TIMEOUT_TIMES } from '@/app/enums/app';

interface PropTypes {
	projects: Project[];
}

export default function HomePage({ projects = [] }: PropTypes) {
	return (
		<ApplicationProvider value={{projects}}>
			<Layout>
				<SortResumeAboutMe />
				<Projects />
			</Layout>
		</ApplicationProvider>
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
