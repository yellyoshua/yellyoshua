import { Project } from '@/app/interfaces';
import RenderMarkdown from '@/app/components2/RenderMarkdown';
import ProjectHeader from './components/ProjectHeader';
import ProjectPreviews from './components/ProjectPreviews';

interface PropTypes {
	project: Project
}

export default function ProjectContent({project}: PropTypes) {
	return (
		<div>
			<ProjectHeader project={project} />
			<RenderMarkdown
				className='mx-auto px-5 sm:px-12 py-5 font-arvo'
				markdown={project.content?.html}
			/>
			<ProjectPreviews previews={project.previews || []} />
		</div>
	);
}
