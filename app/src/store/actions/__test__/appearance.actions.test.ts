import { appearanceStore } from '../../appearance.store';
import { toggleDarkMode } from '../appearance.actions';

describe('appearanceStore - use cases', () => {
	it('should toggle the dark mode', () => {
		expect(appearanceStore.getState().darkMode).toBeFalsy();
		toggleDarkMode();
		expect(appearanceStore.getState().darkMode).toBeTruthy();
	});
});
