import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '@/app/ui';
import { getPageBySlug, getPagesWithSlug } from '@/app/flux/actions';
import { Page } from '@/app/interfaces';

interface PagesProps {
	page: Page;
}

export default function Pages({ page }: PagesProps) {
	return (
		<Layout title={page.title}>
			<h1>{page.title}</h1>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps<PagesProps> = async (ctx) => {
	const page = await getPageBySlug(
		ctx.params?.id ? (ctx.params.id as string) : ''
	);

	return {
		props: { page },
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const pages = await getPagesWithSlug();

	return {
		paths: pages.map((page) => ({ params: { id: page.slug } })),
		fallback: false,
	};
};
