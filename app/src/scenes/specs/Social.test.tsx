import { render, act } from '@testing-library/react';
import Social from '@/app/scenes/Social';
import { SocialLink } from '@/app/interfaces';
import { applicationStore } from '@/app/store/application.store';

const initialState = applicationStore.getState();

const ramdomLink: SocialLink = {
	name: 'Facebook',
	icon: () => <></>,
	url: 'https://facebook.com',
};

describe('Social links scene', () => {
	beforeEach(() => {
		applicationStore.setState(initialState, true);
	});

	it('should render and check social links', async () => {
		const socialLinks = render(<Social />);

		act(() => {
			applicationStore.setState((prev) => ({ ...prev, socialLinks: [ramdomLink] }));
		});

		const title = await socialLinks.findByText(/https:\/\/facebook.com/i);
		expect(title.nodeName).toEqual('A');
	});
});
