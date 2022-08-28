import { render, act } from '@testing-library/react';
import { SocialLinksContainer } from '@/app/components/Footer/SocialLinksContainer';
import { SocialLink } from '@/app/interfaces';
import { applicationStore } from '@/app/store/application.store';

const initialState = applicationStore.getState();

const ramdomLink: SocialLink = {
	name: 'Facebook',
	icon: () => <></>,
	url: 'https://facebook.com',
};

describe('SocialLinksContainer component', () => {
	beforeEach(() => {
		applicationStore.setState(initialState, true);
	});

	it('should render and check social links', async () => {
		const socialLinks = render(<SocialLinksContainer />);

		act(() => {
			applicationStore.setState((prev) => ({ ...prev, socialLinks: [ramdomLink] }));
		});

		const title = await socialLinks.findByText(/https:\/\/facebook.com/i);
		expect(title.nodeName).toEqual('A');
	});
});
