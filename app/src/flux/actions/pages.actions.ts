import { PagesController } from '@/app/api/pages/controllers';
import { usePagesStore } from '../stores';

const pagesController = new PagesController();

export const getPagesSlug = () => {
	return pagesController.getPagesSlug();
};

export const getPageBySlug = (slug: string) => {
	return pagesController.getPageBySlug(slug);
};

export const getPagesRecommendation = async (slugOfPageToIgnore: string) => {
	const pagesRecommendation = await pagesController.getPagesRecommendation(
		slugOfPageToIgnore
	);

	return usePagesStore.setState((prev) => ({ ...prev, pagesRecommendation }));
};
