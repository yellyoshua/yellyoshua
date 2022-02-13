import { GetStaticProps, GetStaticPaths } from 'next';
import { Layout } from '@/app/ui';
import { getPageBySlug, getPagesSlug } from '@/app/flux/actions';
import { Page } from '@/app/interfaces';
import {
	PagesRecommendation,
	RenderMarkdown,
	PostDetails,
} from '@/app/components';
import { TIMEOUT_TIMES } from '@/app/enums/app';

interface PagesProps {
	page: Page;
}

export default function Pages({ page }: PagesProps) {
	return (
		<Layout title={page.title}>
			<PostDetails
				title={page.title}
				createdAt={page.createdAt}
				updatedAt={page.updatedAt}
			/>
			<RenderMarkdown
				html
				className='mx-auto px-5 sm:px-12 py-5'
				style={{ maxWidth: 800 }}
				markdown={page.content?.html || ''}
			/>
			<PagesRecommendation
				className='mx-auto px-5 py-5'
				style={{ maxWidth: 800 }}
				slugOfPageToIgnore={page.slug}
			/>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<PagesProps> = async (ctx) => {
	try {
		const permaLink = ctx.params?.slug ? (ctx.params?.slug as string) : '';

		const page = await getPageBySlug(permaLink);

		return {
			props: { permaLink, page },
			revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS,
		};
	} catch (error) {
		return { notFound: true, revalidate: TIMEOUT_TIMES.TEN_MINUTES_IN_SECONDS };
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pages = await getPagesSlug();

	return {
		paths: pages.map(({ slug }) => ({ params: { slug } })),
		fallback: 'blocking',
	};
};
