import createStore from 'zustand';
import { AppReducer } from '@/app/interfaces';
import { APP_NAME, COPYRIGHT, SOCIAL_LINKS } from '@/app/config/app';

interface FullReducer extends AppReducer {}

const initialState: AppReducer = {
	name: APP_NAME,
	socialLinks: SOCIAL_LINKS,
	copyright: COPYRIGHT,
};

export const useAppStore = createStore<FullReducer>(() => ({
	...initialState,
}));
