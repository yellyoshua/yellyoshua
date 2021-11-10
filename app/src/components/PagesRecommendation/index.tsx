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
						<div className='rounded bg-red-700 p-2'>
							<p className='text-lg text-white font-arvo'>{page.title}</p>
							<p className='text-xs text-white pt-2 font-arvo'>
								{page.description}
							</p>
						</div>
					</a>
				</Link>
			))}
		</div>
	);

	return (
		<div {...props}>
			<h4 className='text-base font-arvo'>Recommendations</h4>
			{renderRecomendationsGrid()}
		</div>
	);
};
