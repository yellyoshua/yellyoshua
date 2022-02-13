import { useEffect } from 'react';
import Link from 'next/link';
import { getPagesRecommendation } from '@/app/flux/actions';
import { usePagesStore } from '@/app/flux/stores';

interface PagesRecommendationProps
	extends React.HTMLAttributes<HTMLDivElement> {
	slugOfPageToIgnore?: string;
}

export const PagesRecommendation = ({
	slugOfPageToIgnore,
	...props
}: PagesRecommendationProps) => {
	const pagesRecommendation = usePagesStore(
		(state) => state.pagesRecommendation
	);

	useEffect(() => {
		getPagesRecommendation(slugOfPageToIgnore || '');
	}, [slugOfPageToIgnore]);

	const renderRecomendationsGrid = () => (
		<div className='py-3 grid gap-1 grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
			{pagesRecommendation.map((page, index) => (
				<Link key={`${page.slug}-${index}`} href={`/${page.slug}`}>
					<a>
						<div className='p-2'>
							<p className='text-sm text-white dark:text-black font-arvo bg-violet-700 dark:bg-lime-600 py-3 px-2'>
								{page.title}
							</p>
						</div>
					</a>
				</Link>
			))}
		</div>
	);

	return (
		<div {...props}>
			<h4 className='text-base font-arvo text-black dark:text-white'>
				Recommendations:
			</h4>
			{renderRecomendationsGrid()}
		</div>
	);
};
