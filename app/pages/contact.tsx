import { GetStaticProps } from 'next';
import { Page } from '@/app/interfaces';
import { TIMEOUT_TIMES } from '@/app/enums/app';
import { PagesController } from '@/app/api/pages/controllers';
import PagesLayout from '@/app/layouts/PagesLayout';
import PageContent from '@/app/scenes/PageContent';
import Contact from '@/app/scenes/Contact';

interface PagesProps {
	page: Page;
	recommendations: Page[];
}

export default function Pages({ page }: PagesProps) {
	return (
		<PagesLayout page={page}>
			<PageContent page={page}/>
			<Contact />
		</PagesLayout>
	);
}

const pagesController = new PagesController();

export const getStaticProps: GetStaticProps<PagesProps> = async (ctx) => {
	try {
		const permaLink = ctx.params?.slug ? (ctx.params?.slug as string) : '';

		const [page, recommendations] = await Promise.all([
			pagesController.getPageBySlug('contact'),
			pagesController.getPagesRecommendation('contact'),
		]);

		return {
			props: { permaLink, page, recommendations },
			revalidate: TIMEOUT_TIMES.FIFTEEN_MINUTES_IN_SECONDS,
		};
	} catch (error) {
		return { notFound: true, revalidate: TIMEOUT_TIMES.FIFTEEN_MINUTES_IN_SECONDS };
	}
};
