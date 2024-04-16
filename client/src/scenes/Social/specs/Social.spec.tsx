import { render, act } from '@testing-library/react';
import Social from '@/app/scenes/Social';
import { applicationStore } from '@/app/store/application.store';

describe('Social links scene', () => {
	beforeEach(() => {
		const initialState = applicationStore.getState();
		applicationStore.setState(initialState, true);
	});

	it('should render and check social links', async () => {
		const socialLinks = render(<Social />);

		expect(socialLinks.findByText('Twitter')).resolves.toBeValid();
		expect(socialLinks.findByText('Linkedin')).resolves.toBeValid();
		expect(socialLinks.findByText('Github')).resolves.toBeValid();
		expect(socialLinks.findByText('Telegram')).resolves.toBeValid();
	});
});
