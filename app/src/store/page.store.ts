import createStore from 'zustand';
import { PageReducer } from '@/app/interfaces';

export interface FullReducer extends PageReducer {}

const initialState: FullReducer = {
	recommendations: [],
	content: null,
};

export const pageStore = createStore<FullReducer>(() => Object.assign({}, initialState));
