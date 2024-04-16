import Text from '@/app/components2/Text';
import { Project } from '@/app/interfaces';
import ButtonLink from '../ButtonLink';
import ProjectStatus from '../ProjectStatus';

type ProjectCardProps = {
	project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className='relative flex justify-center h-80 rounded-2xl overflow-hidden dark:border-[0.5px] dark:border-[#737373]'>
			{project.backdrop && (
				<img
					className='w-full h-80 object-cover'
					src={project.backdrop.url}
					alt={project.backdrop.fileName}
				/>
			)}
			<div className='absolute w-full bg-black top-0 left-0 right-0 bottom-0 bg-opacity-80 h-full grid place-items-center sm:my-auto'>
				<div className='text-center px-6 pt-14 pb-2 w-full'>
					<h1 className='uppercase text-base font-bold font-arvo text-white'>
						{project.title}
					</h1>
					<Text className='text-sm text-center break-words px-3 py-3 font-light font-arvo m-auto text-white max-w-[90%]'>
						{project.description}
					</Text>

					<ProjectStatus status={project.projectStatus} />

					<div className='flex flex-col'>
						{project.externalLink && (
							<ButtonLink external to={project.externalLink} text='Preview' />
						)}

						{project.repository && (
							<ButtonLink
								external
								to={project.repository || ''}
								text='Repository'
							/>
						)}

						<ButtonLink to={`/project/${project.slug}`} text='More info' />
					</div>
				</div>
			</div>
		</div>
	);
}
