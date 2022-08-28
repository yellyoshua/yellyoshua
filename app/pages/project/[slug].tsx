import { GetStaticProps, GetStaticPaths } from 'next';
import { Layout } from '@/app/ui';
import { ProjectDetails, RenderMarkdown } from '@/app/components';
import { Project } from '@/app/interfaces';
import { TIMEOUT_TIMES } from '@/app/enums/app';
import { ProjectsController } from '@/app/api/projects/controllers';

interface ProjectProps {
	project: Project;
}

export default function Projects({ project }: ProjectProps) {
	return (
		<Layout title={project.title}>
			<ProjectDetails {...project} />
			<RenderMarkdown
				className='mx-auto px-5 sm:px-12 py-5 font-arvo'
				markdown={project.content?.html}
			/>
		</Layout>
	);
}

const projectsController = new ProjectsController();

export const getStaticProps: GetStaticProps<ProjectProps> = async (ctx) => {
	try {
		const permaLink = ctx.params?.slug ? (ctx.params?.slug as string) : '';

		const project = await projectsController.getProjectBySlug(permaLink);

		return {
			props: { permaLink, project },
			revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS,
		};
	} catch (error) {
		return { notFound: true, revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS };
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const projects = await projectsController.getProjectsSlug();

	return {
		paths: projects.map(({ slug }) => ({ params: { slug } })),
		fallback: 'blocking',
	};
};
