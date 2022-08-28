import { GetStaticProps } from 'next';
import { Layout } from '@/app/ui';
import { Page } from '@/app/interfaces';
import { RenderMarkdown, PostDetails } from '@/app/components';
import { TIMEOUT_TIMES } from '@/app/enums/app';
import { PagesController } from '@/app/api/pages/controllers';
import { PageProvider } from '@/app/store/Providers';
import ContactForm from '@/app/ui/ContactForm';

interface PagesProps {
	page: Page;
	recommendations: Page[];
}

export default function Pages({ page, recommendations }: PagesProps) {
	return (
		<PageProvider value={{content: page, recommendations}}>
			<Layout title={page.title}>
				<PostDetails
					title={page.title}
					createdAt={page.createdAt}
					updatedAt={page.updatedAt}
				/>
				<RenderMarkdown
					className='mx-auto px-5 sm:px-12 py-5'
					markdown={page.content?.html}
				/>
				<ContactForm />
			</Layout>
		</PageProvider>
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
