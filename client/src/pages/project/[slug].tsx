import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Project } from '@/app/interfaces';
import { TIMEOUT_TIMES } from '@/app/enums/app';
import projectsApi from '@/app/api-v2/projects/projects-api';
import ProjectsLayout from '@/app/layouts/ProjectsLayout';
import ProjectContent from '@/app/scenes/ProjectContent';

interface ProjectProps {
	project: Project;
}

export default function Projects({ project }: ProjectProps) {
	return (
		<ProjectsLayout project={project}>
			<ProjectContent project={project} />
		</ProjectsLayout>
	);
}

export const getStaticProps: GetStaticProps<ProjectProps> = async (ctx) => {
	try {
		const permaLink = ctx.params?.slug ? (ctx.params?.slug as string) : '';

		const project = await projectsApi.getProjectBySlug(permaLink);

		return {
			props: { permaLink, project },
			revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS,
		};
	} catch (error) {
		return { notFound: true, revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS };
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const projects = await projectsApi.getProjectsSlug();

	return {
		paths: projects.map(({ slug }) => ({ params: { slug } })),
		fallback: 'blocking',
	};
};
