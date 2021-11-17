import { render, act } from '@testing-library/react';
import { Projects } from '@/app/ui/Projects';
import { useProjectsStore } from '@/app/flux/stores';
import { Project } from '@/app/interfaces';

const initialState = useProjectsStore.getState();

const randomProject: Project = {
	id: 'ckvo2rsxkrma40a30lb0whh71',
	title: 'RANDOM PROJECT',
	slug: 'project-random-project',
	description: 'This is a sort description',
	content: null,
	isDevelopment: false,
	externalLink: null,
	backdrop: null,
	repository: null,
};

describe('Projects ui component', () => {
	beforeEach(() => {
		useProjectsStore.setState(initialState, true);
	});

	it('should render and check title be inside h1 tag', async () => {
		const project = render(<Projects />);

		const title = await project.findByText(/Projects/i);
		expect(title.nodeName).toEqual('H1');
	});

	it('should render the sample project', async () => {
		const project = render(<Projects />);

		act(() => {
			useProjectsStore.setState((prev) => ({
				...prev,
				projects: [randomProject],
			}));
		});

		const title = await project.findByText(/RANDOM PROJECT/i);
		expect(title.nodeName).toEqual('H1');
	});
});
