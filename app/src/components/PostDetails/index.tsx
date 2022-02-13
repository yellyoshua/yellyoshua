import dayjs from 'dayjs';
import CalendarIcon from '@heroicons/react/solid/CalendarIcon';
import ClockIcon from '@heroicons/react/solid/ClockIcon';
import TextWithIcon from '../commons/TextWithIcon';

interface PropTypes {
	title: string;
	updatedAt: string | null;
	createdAt: string | null;
}

function PostDetails({ title, updatedAt, createdAt }: PropTypes) {
	const updatedAtText = updatedAt
		? dayjs(updatedAt, { locale: 'es' }).format('DD MMMM [del] YYYY')
		: '--';

	const createdAtText = createdAt
		? dayjs(createdAt, { locale: 'es' }).format('DD MMMM [del] YYYY')
		: '--';

	const getTimeAgo = (dateForTimeAgo: string) => {
		const timeAgo = dayjs(dateForTimeAgo).fromNow();
		return `(${timeAgo})`;
	};

	const readTime = '--';

	return (
		<div className='mx-3 mb-10 mt-5 p-2'>
			<h1 className='text-center text-4xl font-bold font-jost text-black dark:text-white'>
				{title}
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
				<div className='flex items-start justify-center flex-col text-sm m-0 md:m-auto text-black dark:text-white'>
					<TextWithIcon
						className='text-black dark:text-white'
						icon={
							<CalendarIcon
								className='mr-2 text-black dark:text-white'
								width={15}
							/>
						}
					>
						<strong className='dark:text-white'>Publicado: </strong>
					</TextWithIcon>
					{createdAtText}
				</div>
				<div className='flex items-start justify-center flex-col text-sm m-0 md:m-auto text-black dark:text-white'>
					<TextWithIcon
						className='text-black dark:text-white'
						icon={
							<ClockIcon
								className='mr-2 text-black dark:text-white'
								width={15}
							/>
						}
					>
						<strong>Actualizado: </strong>
					</TextWithIcon>
					{updatedAtText} {updatedAt && getTimeAgo(updatedAt)}
				</div>
				<div className='flex items-start justify-center flex-col text-sm m-0 md:m-auto text-black dark:text-white'>
					<TextWithIcon
						className='text-black dark:text-white'
						icon={
							<CalendarIcon
								className='mr-2 text-black dark:text-white'
								width={15}
							/>
						}
					>
						<strong>Lectura (minutos): </strong>
					</TextWithIcon>
					{readTime}
				</div>
			</div>
		</div>
	);
}

export default PostDetails;
