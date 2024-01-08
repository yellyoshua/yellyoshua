import {Project} from '@/app/interfaces';
import FireIcon from '@heroicons/react/solid/FireIcon';
import ArchiveIcon from '@heroicons/react/solid/ArchiveIcon';
import LightningBoltIcon from '@heroicons/react/solid/LightningBoltIcon';

type ProjectStatusProps = {
	status: Project['projectStatus'];
}

export default function ProjectStatus(props: ProjectStatusProps) {
	const projectStatusElement = () => {
		if (props.status === 'development') {
			return (
				<p className='flex items-center rounded-2xl text-xs text-white m-auto bg-red-600 w-max px-2 py-1 leading-none'>
					<LightningBoltIcon className='w-4 h-4 inline-block mr-1' />
					Development
				</p>
			)
		}
	
		if (props.status === 'forgotten') {
			return (
				<p className='flex items-center rounded-2xl text-xs text-white m-auto bg-yellow-600 w-max px-2 py-1 leading-none'>
					Forgotten
				</p>
			)
		}
	
		if (props.status === 'archived') {
			return (
				<p className='flex items-center rounded-2xl text-xs text-white m-auto bg-gray-600 w-max px-2 py-1 leading-none'>
					<ArchiveIcon className='w-4 h-4 inline-block mr-1' />
					Archived
				</p>
			)
		}
	
		return (
			<p className='flex items-center rounded-2xl text-xs text-white m-auto bg-green-600 w-max px-2 py-1 leading-none'>
				<FireIcon className='w-4 h-4 inline-block mr-1' />
				Finished
			</p>
		)
	};

	return (
		<div className='absolute right-0 top-0'>
			<div className='mt-4 mr-4 bg-white dark:bg-gray-900 rounded-2xl p-1.5'>
				{projectStatusElement()}
			</div>
		</div>
	)
}