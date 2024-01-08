import Image from 'next/image';
import Text from '@/app/components2/Text';
import {Project} from '@/app/interfaces';
import ButtonLink from '../ButtonLink';
import ProjectStatus from '../ProjectStatus';

type ProjectCardProps = {
	project: Project;
};

export default function ProjectCard({project}: ProjectCardProps) {
	return (
		<div className='relative flex justify-center h-80 rounded-2xl overflow-hidden'>
			{project.backdrop && (
				<Image
					className='w-full h-80'
					layout='fill'
					objectFit='cover'
					src={project.backdrop?.url}
					alt={project.backdrop?.url}
				/>
			)}
			<div className='absolute w-full bg-black top-0 left-0 right-0 bottom-0 bg-opacity-80 h-full grid place-items-center sm:my-auto'>
				<div className='text-center py-6 w-full'>
					<h1 className='uppercase text-base font-bold font-arvo text-white'>
						{project.title}
					</h1>
					<Text className='text-sm text-center break-words px-3 py-3 font-light m-auto text-white'>
						{project.description}
					</Text>
					<ProjectStatus status={project.projectStatus} />

					<div className='flex flex-col'>
						{project.externalLink && (
							<ButtonLink
								external
								to={project.externalLink}
								text='Preview'
							/>
						)}

						{project.repository && (
							<ButtonLink
								external
								to={project.repository || ''}
								text='Repository'
							/>
						)}

						<ButtonLink
							to={`/project/${project.slug}`}
							text='More info'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
