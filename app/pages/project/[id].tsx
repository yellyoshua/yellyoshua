import { GetStaticProps } from 'next';
import { Layout } from '@/app/ui';
import { getProjectBySlug } from '@/app/flux/actions';
import { RenderMarkdown } from '@/app/components';
import { Project } from '@/app/interfaces';

interface ProjectProps {
	project: Project;
}

export default function Projects({ project }: ProjectProps) {
	return (
		<Layout title={project.title}>
			<p
				className='mx-auto px-5 sm:px-12 text-xl font-arvo font-bold text-left text-black dark:text-white my-4'
				style={{ maxWidth: 800 }}
			>
				{project.title}
			</p>
			<RenderMarkdown
				html
				className='mx-auto px-5 sm:px-12 py-5 font-arvo'
				style={{ maxWidth: 800 }}
				markdown={project.content ? project.content.html || '' : ''}
			/>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<ProjectProps> = async (ctx) => {
	const project = await getProjectBySlug(
		ctx.params?.id ? (ctx.params.id as string) : ''
	);

	return {
		props: { project },
		notFound: project === null,
	};
};
