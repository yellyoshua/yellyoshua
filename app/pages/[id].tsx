import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '@/app/ui';
import { getPageBySlug, getPagesWithSlug } from '@/app/flux/actions';
import { Page } from '@/app/interfaces';
import { PagesRecommendation, RenderMarkdown } from '@/app/components';

interface PagesProps {
	page: Page;
}

export default function Pages({ page }: PagesProps) {
	return (
		<Layout title={page.title}>
			<RenderMarkdown
				className='mx-auto px-5 sm:px-12 py-5'
				style={{ maxWidth: 800 }}
				markdown={page.richContent ? page.richContent.markdown || '' : ''}
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
	const page = await getPageBySlug(
		ctx.params?.id ? (ctx.params.id as string) : ''
	);

	return {
		props: { page },
		revalidate: 900,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pages = await getPagesWithSlug();

	return {
		paths: pages.map((page) => ({ params: { id: page.slug } })),
		fallback: false,
	};
};
