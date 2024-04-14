import Link from 'next/link';
import { Page } from '@/app/interfaces';
import dayjs from 'dayjs';

interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {
	pages: Page[];
}

export default function SuggestedPages({ pages }: PropTypes) {
	return (
		<div className='mx-auto px-5 py-5' style={{ maxWidth: 800 }}>
			<h4 className='text-base font-arvo text-black dark:text-white'>
				You may also like:
			</h4>
			<div className='py-3 grid gap-2 grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{pages.map((page, index) => (
					<SuggestedPost key={`${page.slug}-${index}`} page={page} />
				))}
			</div>
		</div>
	);
}

function SuggestedPost({ page }: { page: Page }) {
	const updatedAtText = page.updatedAt
		? dayjs(page.updatedAt, { locale: 'en' }).format('DD MMMM YYYY')
		: '--';

	return (
		<Link
			href={`/${page.slug}`}
			passHref
			className='flex gap-2 flex-col p-2 dark:bg-gray-800 bg-gray-100 rounded-md shadow-md hover:scale-[0.98] transition-transform'
		>
			<p className='text-sm text-black dark:text-white font-arvo'>
				{page.title}
			</p>

			<p className='text-xs text-gray-500 dark:text-gray-400'>
				{updatedAtText}
			</p>
		</Link>
	);
}
