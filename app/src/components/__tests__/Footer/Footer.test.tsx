import { render, act } from '@testing-library/react';
import { Footer } from '@/app/components/Footer';
import { useAppStore } from '@/app/flux/stores';

const initialState = useAppStore.getState();

describe('Footer component', () => {
	beforeEach(() => {
		useAppStore.setState(initialState, true);
	});

	it('should render and check copyright', async () => {
		const footer = render(<Footer />);

		act(() => {
			useAppStore.setState((prev) => ({ ...prev, copyright: 'Space X' }));
		});

		const title = await footer.findByText(/@ Space X/i);
		expect(title.innerText).toEqual('@ Space X');
	});
});
