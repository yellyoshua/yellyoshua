import dayjs from 'dayjs';
import { Page } from '@/app/interfaces';
import ClockIcon from '@heroicons/react/solid/ClockIcon';
import CalendarIcon from '@heroicons/react/solid/CalendarIcon';
import RenderMarkdown from '@/app/components2/RenderMarkdown';
import BoxLabel from '@/app/components2/BoxLabel';

interface PropTypes {
	page: Page;
	readTime: string;
}

export default function PostContent({ page, readTime }: PropTypes) {
	const updatedAtText = page.updatedAt
		? dayjs(page.updatedAt, { locale: 'en' }).format('DD MMMM YYYY')
		: '--';

	const createdAtText = page.createdAt
		? dayjs(page.createdAt, { locale: 'en' }).format('DD MMMM YYYY')
		: '--';

	const getTimeAgo = (dateForTimeAgo: string) => {
		const timeAgo = dayjs(dateForTimeAgo).fromNow(true);
		return `(${timeAgo})`;
	};

	return (
		<div>
			<section className='mx-3 mb-10 mt-5 p-2'>
				<h1 className='text-center text-4xl font-bold font-jost text-black dark:text-white'>
					{page.title}
				</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
					<BoxLabel
						label='Posted:'
						content={createdAtText}
						icon={
							<CalendarIcon
								className='mr-2 text-black dark:text-white'
								width={15}
							/>
						}
					/>

					<BoxLabel
						label='Last updated:'
						content={`${updatedAtText} ${page.updatedAt && getTimeAgo(page.updatedAt)}`}
						icon={
							<ClockIcon
								className='mr-2 text-black dark:text-white'
								width={15}
							/>
						}
					/>

					<BoxLabel
						label='Read time:'
						content={<span className='m-auto'>{readTime}</span>}
						icon={
							<CalendarIcon
								className='mr-2 text-black dark:text-white'
								width={15}
							/>
						}
					/>
				</div>
			</section>
			<RenderMarkdown
				className='mx-auto px-5 sm:px-12 py-5'
				markdown={page.content?.html}
			/>
		</div>
	);
}
