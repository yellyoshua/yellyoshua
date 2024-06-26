import { GetStaticProps, GetStaticPaths } from 'next';
import { Page } from '@/app/interfaces';
import { TIMEOUT_TIMES } from '@/app/enums/app';
import pagesApi from '@/app/api-v2/pages/pages-api';
import PagesLayout from '@/app/layouts/PagesLayout';
import PageContent from '@/app/scenes/PageContent';
import SuggestedPages from '@/app/scenes/SuggestedPages';

interface PagesProps {
	page: Page;
	readTime: string;
	recommendations: Page[];
}

export default function Pages({ page, recommendations, readTime }: PagesProps) {
	return (
		<PagesLayout page={page}>
			<PageContent page={page} readTime={readTime} />
			<SuggestedPages pages={recommendations} />
		</PagesLayout>
	);
}

export const getStaticProps: GetStaticProps<PagesProps> = async (ctx) => {
	try {
		const permaLink = ctx.params?.slug ? (ctx.params?.slug as string) : '';

		const [page, recommendations] = await Promise.all([
			pagesApi.getPageBySlug(permaLink),
			pagesApi.getPagesRecommendation(permaLink),
		]);

		const content = page.content?.html || '';
		const readTime = getReadTime(content);

		return {
			props: { permaLink, page, recommendations, readTime: readTime },
			revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS,
		};
	} catch (error) {
		return { notFound: true, revalidate: TIMEOUT_TIMES.MINUTE_IN_SECONDS };
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pages = await pagesApi.getPagesSlug();

	return {
		paths: pages.map(({ slug }) => ({ params: { slug } })),
		fallback: 'blocking',
	};
};

function getReadTime(content: string = '') {
	const wordsPerMinute = 160;
	const wordsPerSecond = wordsPerMinute / 60;

	const words = content.split(/\s/g).length;
	const secondsReadTime = Math.ceil(words / wordsPerSecond);

	const secondsLeft = secondsReadTime % 60;
	const minutes = Math.floor(secondsReadTime / 60);

	if (minutes === 0) return `~1 min`;
	if (secondsLeft === 0) return `${minutes} min`;

	return `${minutes} min ${secondsLeft} sec`;
}
