import { PagesRepository } from '@/app/api/pages/repository';
import { Page, PageWithSlug } from '@/app/interfaces';

export class PagesController {
	private pageRepository: PagesRepository;

	constructor() {
		this.pageRepository = new PagesRepository();
	}

	async getPagesSlug(): Promise<PageWithSlug[]> {
		const { data } = await this.pageRepository.getPagesSlug();

		const { pages = null } = data || {};

		if (pages === null) {
			return [];
		}

		return pages;
	}

	async getPageBySlug(slug: string): Promise<Page> {
		const { data } = await this.pageRepository.getPageBySlug(slug);
		const { page = null } = data || {};
		if (!page) throw new Error(`page ${slug} not found`);
		return page;
	}

	async getPagesRecommendation(slug: string): Promise<Page[]> {
		const { data } = await this.pageRepository.getPagesRecommendation(slug, 15);

		const { pages = null } = data || {};

		if (pages === null) {
			return [];
		}

		return pages;
	}
}
