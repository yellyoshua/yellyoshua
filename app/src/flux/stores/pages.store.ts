import createStore from 'zustand';
import { PagesReducer } from '@/app/interfaces';

interface FullReducer extends PagesReducer {}

const initialState: PagesReducer = {
	pagesRecommendation: [],
};

export const usePagesStore = createStore<FullReducer>(() => ({
	...initialState,
}));
