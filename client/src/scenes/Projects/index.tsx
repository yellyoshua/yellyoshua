import {Project} from '@/app/interfaces';
import ProjectCard from './components/ProjectCard';

interface PropTypes {
	projects: Project[]
}

export default function Projects({projects}: PropTypes) {
	return (
		<section className='w-full'>
			<h1 className='text-center mb-16 text-black dark:text-white font-bold font-arvo text-2xl uppercase'>
				Projects
			</h1>
			<div className='grid gap-3 mx-3 grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project, index) => {
					return (
						<ProjectCard
							key={`${project.id}-${index}`}
							project={project}
						/>
					);
				})}
			</div>
		</section>
	);
}
