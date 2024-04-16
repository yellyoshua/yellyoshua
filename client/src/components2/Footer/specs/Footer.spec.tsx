import { render, act } from '@testing-library/react';
import Footer from '@/app/components2/Footer';
import { applicationStore } from '@/app/store/application.store';

fdescribe('Footer component', () => {
	beforeEach(() => {
		const initialState = applicationStore.getState();

		applicationStore.setState(initialState, true);
	});

	fit('should render and check copyright', async () => {
		const footer = render(<Footer />);

		act(() => {
			applicationStore.setState({ copyright: 'Space X all rights reserved' });
			footer.rerender(<Footer />);
		});

		const results = await footer.findByText(/Space X/i);
		expect(results.innerHTML).toContain('Space X all rights reserved');
	});
});
