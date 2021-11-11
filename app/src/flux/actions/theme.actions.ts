import { useThemeStore } from 'src/flux/store';

export const changeDarkMode = (
	active: boolean,
	incremental: boolean = true
) => {
	active
		? document.documentElement.classList.add('dark')
		: document.documentElement.classList.remove('dark');
	return useThemeStore.setState((prev) => ({
		...prev,
		darkMode: active,
		timesChangedDarkMode: incremental
			? prev.timesChangedDarkMode + 1
			: prev.timesChangedDarkMode,
	}));
};

// TODO: REMOVE this and test's
export const toggleDarkMode = () => {
	return useThemeStore.setState((prev) => ({
		...prev,
		darkMode: !prev.darkMode,
	}));
};
