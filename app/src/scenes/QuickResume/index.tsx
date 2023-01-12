import Link from 'next/link';
import { MeAsVector } from '../../assets/images/me-as-vector';

export default function QuickResume() {
	return (
		<div className='mb-16 md:mb-0'>
			<div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 select-none'>
				<div className='flex justify-center'>
					<div className='shadow-2xl border-green-500 border-2 p-1 rounded-md'>
						<MeAsVector className='border-purple-700 border-2 w-60 bg-white dark:bg-gray-900 transition-colors duration-500 filter pb-6 rounded-md fill-current text-dark dark:text-white' />
					</div>
				</div>
				<div className='flex m-auto pt-5 md:pt-0 md:m-0 place-items-center'>
					<div className='text-left md:w-7/12 w-60'>
						<h1 className='font-arvo text-xl font-bold text-black dark:text-white'>
							I&lsquo;m{' '}
							<Link href='/yellyoshua'>
								<a className='text-green-500 hover:underline'>@yellyoshua</a>
							</Link>
						</h1>
						<p className='font-arvo text-xs mb-4 text-green-500'>
							Once upon a time
						</p>
						<h2 className='font-arvo text-lg text-black dark:text-white'>
							A self-taught young man with a passion for constant learning every
							day.
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
