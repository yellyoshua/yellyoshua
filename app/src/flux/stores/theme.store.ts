import createStore from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeReducer } from '@/app/interfaces';

interface FullReducer extends ThemeReducer {}

const initialState: ThemeReducer = {
	darkMode: false,
};

export const useThemeStore = createStore<FullReducer>(
	persist(
		() => ({
			...initialState,
		}),
		{
			name: 'app-theme-store',
			getStorage: () => localStorage,
			version: 0,
		}
	)
);
