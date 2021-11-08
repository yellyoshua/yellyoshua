import createStore from 'zustand';
import { ThemeReducer } from '@/app/interfaces';

interface FullReducer extends ThemeReducer {}

const initialState: ThemeReducer = {
	darkMode: false,
};

export const useThemeStore = createStore<FullReducer>(() => ({
	...initialState,
}));
