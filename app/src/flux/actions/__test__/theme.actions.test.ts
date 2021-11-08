import { useThemeStore } from '@/app/flux/store';
import { toggleDarkMode } from '@/app/flux/actions/theme.actions';

describe('useThemeStore - use cases', () => {
	it('should toggle the dark mode', () => {
		expect(useThemeStore.getState().darkMode).toBeFalsy();
		toggleDarkMode();
		expect(useThemeStore.getState().darkMode).toBeTruthy();
	});
});
