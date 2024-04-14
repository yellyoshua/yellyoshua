import { create } from 'zustand';
import { PageReducer } from '@/app/interfaces';

export interface FullReducer extends PageReducer {}

const initialState: FullReducer = {
	recommendations: [],
	content: null,
};

export const pageStore = create<FullReducer>(() =>
	Object.assign({}, initialState)
);
