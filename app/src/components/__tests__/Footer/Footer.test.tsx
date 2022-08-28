import { render, act } from '@testing-library/react';
import { Footer } from '@/app/components/Footer';
import { applicationStore } from '@/app/store/application.store';

const initialState = applicationStore.getState();

describe('Footer component', () => {
	beforeEach(() => {
		applicationStore.setState(initialState, true);
	});

	it('should render and check copyright', async () => {
		const footer = render(<Footer />);

		act(() => {
			applicationStore.setState((prev) => ({ ...prev, copyright: 'Space X' }));
		});

		const title = await footer.findByText(/@ Space X/i);
		expect(title.innerText).toEqual('@ Space X');
	});
});
