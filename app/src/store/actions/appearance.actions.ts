import { appearanceStore } from '../appearance.store';

export const changeDarkMode = (active: boolean, incremental: boolean = true) => {
	active
		? document.documentElement.classList.add('dark')
		: document.documentElement.classList.remove('dark');

	return appearanceStore.setState((prev) => ({
		...prev,
		darkMode: active,
		timesChangedDarkMode: incremental
			? prev.timesChangedDarkMode + 1
			: prev.timesChangedDarkMode,
	}));
};

export const toggleDarkMode = () => {
	return appearanceStore.setState((prev) => ({
		...prev,
		darkMode: !prev.darkMode,
	}));
};
