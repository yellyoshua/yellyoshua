import createStore from 'zustand';
import { persist } from 'zustand/middleware';
import { AppearanceReducer } from '@/app/interfaces';

interface FullReducer extends AppearanceReducer {}

const initialState: FullReducer = {
	darkMode: false,
	timesChangedDarkMode: 0,
};

export const appearanceStore = createStore<FullReducer>(
	persist(
		() => Object.assign({}, initialState),
		{
			name: 'app-appearance-store',
			getStorage: () => localStorage,
			version: 0,
		}
	)
);
