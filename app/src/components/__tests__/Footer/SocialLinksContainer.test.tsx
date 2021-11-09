import { render, act } from '@testing-library/react';
import { SocialLinksContainer } from '@/app/components/Footer/SocialLinksContainer';
import { useAppStore } from '@/app/flux/stores';
import { SocialLink } from '@/app/interfaces';

const initialState = useAppStore.getState();

const ramdomLink: SocialLink = {
	name: 'Facebook',
	icon: () => <></>,
	url: 'https://facebook.com',
};

describe('SocialLinksContainer component', () => {
	beforeEach(() => {
		useAppStore.setState(initialState, true);
	});

	it('should render and check social links', async () => {
		const socialLinks = render(<SocialLinksContainer />);

		act(() => {
			useAppStore.setState((prev) => ({ ...prev, socialLinks: [ramdomLink] }));
		});

		const title = await socialLinks.findByText(/https:\/\/facebook.com/i);
		expect(title.nodeName).toEqual('A');
	});
});
