import { DarkModeSwitch } from '../components/DarkModeSwitch';

const srcImage = '/assets/images/me-as-vector-005502.png';

export function SortResumeAboutMe() {
	const renderQuickActions = () => {
		return (
			<div className='pt-5'>
				<h1 className='font-arvo text-xl font-bold text-black dark:text-white'>
					Acciones r&aacute;pidas
				</h1>
				<DarkModeSwitch />
			</div>
		);
	};

	return (
		<div className='md:h-screen mb-16 md:mb-0'>
			<div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 select-none'>
				<div className='flex justify-center'>
					<div className='shadow-2xl border-green-500 border-2 p-1 rounded-md'>
						<img
							className='border-purple-700 border-2 w-60 bg-white pb-6 rounded-md'
							src={srcImage}
							alt={srcImage}
						/>
					</div>
				</div>
				<div className='flex m-auto pt-5 md:pt-0 md:m-0 place-items-center'>
					<div className='text-left md:w-7/12 w-60'>
						<h1 className='font-arvo text-xl font-bold text-black dark:text-white'>
							I'm{' '}
							<a href='/yellyoshua' className='text-green-500 hover:underline'>
								@yellyoshua
							</a>
						</h1>
						<p className='font-arvo text-xs mb-4 text-green-500'>
							Once upon a time
						</p>
						<h2 className='font-arvo text-lg text-black dark:text-white'>
							Un joven autodidacta apasionado por el aprender constantemente
							cada d&iacute;a.
						</h2>
						{renderQuickActions()}
					</div>
				</div>
			</div>
		</div>
	);
}
