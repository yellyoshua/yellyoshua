import createStore from 'zustand';
import { ProjectsReducer } from '@/app/interfaces';

interface FullReducer extends ProjectsReducer {}

const initialState: ProjectsReducer = {
	projects: [],
};

export const useProjectsStore = createStore<FullReducer>(() => ({
	...initialState,
}));
