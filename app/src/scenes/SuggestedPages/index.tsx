import Link from 'next/link';
import { Page } from '@/app/interfaces';

interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {
	pages: Page[];
}

export default function SuggestedPages({pages}: PropTypes) {

	return (
		<div className='mx-auto px-5 py-5' style={{ maxWidth: 800 }}>
			<h4 className='text-base font-arvo text-black dark:text-white'>
				You may also like:
			</h4>
			<div className='py-3 grid gap-1 grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{pages.map((page, index) => (
					<Link key={`${page.slug}-${index}`} href={`/${page.slug}`}>
						<a>
							<div className='p-2'>
								<p className='text-sm text-white dark:text-black font-arvo bg-violet-700 py-3 px-2'>
									{page.title}
								</p>
							</div>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};
