import { GetStaticProps, GetStaticPaths } from 'next';
import { Page } from '@/app/interfaces';
import { TIMEOUT_TIMES } from '@/app/enums/app';
import { PagesController } from '@/app/api/pages/controllers';
import PagesLayout from '@/app/layouts/PagesLayout';
import PageContent from '@/app/scenes/PageContent';
import SuggestedPages from '@/app/scenes/SuggestedPages';

interface PagesProps {
	page: Page;
	recommendations: Page[];
}

export default function Pages({ page, recommendations }: PagesProps) {
	return (
		<PagesLayout page={page}>
			<PageContent page={page}/>
			<SuggestedPages pages={recommendations} />
		</PagesLayout>
	);
}

const pagesController = new PagesController();

export const getStaticProps: GetStaticProps<PagesProps> = async (ctx) => {
	try {
		const permaLink = ctx.params?.slug ? (ctx.params?.slug as string) : '';

		const [page, recommendations] = await Promise.all([
			pagesController.getPageBySlug(permaLink),
			pagesController.getPagesRecommendation(permaLink),
		]);

		return {
			props: { permaLink, page, recommendations },
			revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS,
		};
	} catch (error) {
		return { notFound: true, revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS };
	}
};

const pagesToFilter = ['contact'];

export const getStaticPaths: GetStaticPaths = async () => {
	const pages = await pagesController.getPagesSlug();
	const filteredPages = pages.filter((page) => !pagesToFilter.includes(page.slug));

	return {
		paths: filteredPages.map(({ slug }) => ({ params: { slug } })),
		fallback: 'blocking',
	};
};
