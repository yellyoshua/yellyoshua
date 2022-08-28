import createStore from 'zustand';
import { ApplicationReducer } from '@/app/interfaces';
import * as application from '@/app/config/app';

export interface FullReducer extends ApplicationReducer {}

const initialState: FullReducer = {
	name: application.APP_NAME,
	socialLinks: application.SOCIAL_LINKS,
	copyright: application.COPYRIGHT,
	projects: [],
};

export const applicationStore = createStore<FullReducer>(() => Object.assign({}, initialState));
