import { Project } from '@/app/interfaces';
import StatusOnlineIcon from '@heroicons/react/solid/StatusOnlineIcon';
import FireIcon from '@heroicons/react/solid/FireIcon';
import ExternalLinkIcon from '@heroicons/react/solid/ExternalLinkIcon';
import CodeIcon from '@heroicons/react/solid/CodeIcon';
import BoxLabel from '@/app/components2/BoxLabel';
import ProjectStatus from '@/app/components2/ProjectStatus';

interface PropTypes {
	project: Project;
}

export default function ProjectHeader({ project }: PropTypes) {
	const renderPreviewLink = (link: string) => (
		<a rel='noopener noreferrer' target='_blank' href={link} className='m-auto'>
			<p className='flex items-center justify-center text-sky-700 bg-white px-2 py-1'>
				<ExternalLinkIcon className='mr-1' width={15} />
				<strong>Preview</strong>
			</p>
		</a>
	);

	const renderExternalLink = (link: string | null) => {
		if (!link) return <p className='m-auto'>No avaliable</p>;

		return renderPreviewLink(link);
	};

	const renderRepoPrivated = () => (
		<p className='bg-red-500 text-white px-1'>Privated</p>
	);

	return (
		<section className='relative px-2 py-10 md:py-20 m-auto'>
			<div className='relative z-30'>
				<h1 className='text-center text-4xl font-bold font-jost dark:text-white'>
					{project.title}
				</h1>
				<p className='m-auto text-center px-2 py-4 max-w-lg dark:text-white'>
					{project.description}
				</p>
				<div className='flex flex-wrap justify-around items-center gap-6'>
					<BoxLabel
						label='Status:'
						content={<ProjectStatus status={project.projectStatus} />}
						icon={
							<StatusOnlineIcon
								className='mr-2 text-yellow-500 dark:text-white'
								width={15}
							/>
						}
					/>
					<BoxLabel
						label='External link:'
						content={renderExternalLink(project.externalLink)}
						icon={
							<FireIcon
								className='mr-2 text-red-700 dark:text-white'
								width={15}
							/>
						}
					/>
					<BoxLabel
						label='Repository:'
						content={
							project.repository
								? renderPreviewLink(project.repository)
								: renderRepoPrivated()
						}
						icon={
							<CodeIcon
								className='mr-2 text-red-700 dark:text-white'
								width={15}
							/>
						}
					/>
				</div>
			</div>

			{project.backdrop?.url && (
				<div className='absolute top-0 right-0 w-full h-full opacity-10 flex justify-center'>
					<img
						className='w-full h-full object-cover'
						src={project.backdrop.url}
						alt={project.backdrop.fileName}
					/>
				</div>
			)}
		</section>
	);
}
