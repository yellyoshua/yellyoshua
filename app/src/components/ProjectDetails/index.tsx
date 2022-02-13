import { Project } from '@/app/interfaces';
import StatusOnlineIcon from '@heroicons/react/solid/StatusOnlineIcon';
import FireIcon from '@heroicons/react/solid/FireIcon';
import ExternalLinkIcon from '@heroicons/react/solid/ExternalLinkIcon';
import CodeIcon from '@heroicons/react/solid/CodeIcon';
import TextWithIcon from '../commons/TextWithIcon';

interface PropTypes extends Project {}

function ProjectDetails({
	title,
	isDevelopment,
	externalLink,
	repository,
	description,
}: PropTypes) {
	const titleContent = (
		<h1 className='text-center text-4xl font-bold font-jost dark:text-white'>
			{title}
		</h1>
	);

	const renderBox = (
		label: string,
		content: React.ReactNode,
		icon: React.ReactNode
	) => (
		<div className='flex items-start justify-center flex-col text-sm m-0 md:m-auto text-black dark:text-white'>
			<TextWithIcon className='text-black dark:text-white' icon={icon}>
				<strong className='dark:text-white'>{label} </strong>
			</TextWithIcon>
			{content}
		</div>
	);

	const renderDevelopmentStatus = (underDevelopment: boolean) => (
		<p
			className={`${
				underDevelopment ? 'bg-red-500 text-white' : 'bg-green-700 text-white'
			} px-1`}
		>
			{underDevelopment ? 'In development' : 'Deployed'}
		</p>
	);

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

	const renderRepoPublic = (linkRepo: string) => renderPreviewLink(linkRepo);

	const descriptionContent = (
		<p className='m-auto text-center px-2 py-4 max-w-lg dark:text-white'>
			{description}
		</p>
	);

	return (
		<section className='px-2 py-1 m-auto'>
			{titleContent}
			{descriptionContent}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
				{renderBox(
					'Status:',
					renderDevelopmentStatus(isDevelopment),
					<StatusOnlineIcon
						className='mr-2 text-yellow-500 dark:text-white'
						width={15}
					/>
				)}
				{renderBox(
					'External link:',
					renderExternalLink(externalLink),
					<FireIcon className='mr-2 text-red-700 dark:text-white' width={15} />
				)}
				{renderBox(
					'Repository:',
					repository ? renderRepoPublic(repository) : renderRepoPrivated(),
					<CodeIcon className='mr-2 text-red-700 dark:text-white' width={15} />
				)}
			</div>
		</section>
	);
}

export default ProjectDetails;
