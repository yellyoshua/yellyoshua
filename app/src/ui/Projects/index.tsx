import Image from 'next/image';
import { Text } from '@/app/components';
import { ButtonLink } from './ButtonLink';
import { useProjectsStore } from '@/app/flux/stores';

export function Projects() {
	const projects = useProjectsStore((state) => state.projects);

	return (
		<div className='w-full'>
			<h1 className='text-center mb-16 text-black dark:text-white font-bold font-arvo text-2xl uppercase'>
				Projects
			</h1>
			<div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project, index) => {
					return (
						<div
							key={`${project.id}-${index}`}
							className='relative flex justify-center h-80'
						>
							{project.backdrop && (
								<Image
									className='w-full h-80'
									layout='fill'
									src={project.backdrop?.url}
									alt={project.backdrop?.url}
								/>
							)}
							<div className='absolute w-full bg-black top-0 left-0 right-0 bottom-0 bg-opacity-80 h-full grid place-items-center sm:my-auto'>
								<div className='text-center py-6 w-full'>
									<h1 className='uppercase text-base font-bold font-arvo text-white'>
										{project.title}
									</h1>
									<Text className='text-sm text-center break-words px-3 py-3 font-light m-auto text-white'>
										{project.description}
									</Text>
									<div className='w-full my-3'>
										<Text
											className={`text-xs text-white m-auto ${
												project.isDevelopment ? 'bg-red-600' : 'bg-green-600'
											} w-max px-1 py-1 leading-none`}
										>
											{project.isDevelopment
												? 'Proyecto en desarrollo'
												: 'Proyecto terminado'}
										</Text>
									</div>

									<div className='flex flex-col'>
										{project.externalLink && (
											<ButtonLink
												external
												to={project.externalLink}
												text='Preview'
											/>
										)}

										<ButtonLink
											external
											to={project.repository || ''}
											text='Repository'
										/>

										<ButtonLink
											to={`/project/${project.slug}`}
											text='More info'
										/>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
