import Link from 'next/link';
import Separator from '@/app/components2/Separator';
import { SocialLinksContainer } from './SocialLinksContainer';
import { applicationStore } from '@/app/store/application.store';

import dynamic from 'next/dynamic';

const DarkModeSwitchNoSSR = dynamic(
	() => import('@/app/components2/DarkModeSwitch'),
	{
		ssr: false,
	}
);

interface PropTypes {
	children?: React.ReactNode;
}

export default function Footer({ children }: PropTypes) {
	const copyright = applicationStore.getState().copyright;

	const renderBuyMeACoffe = () => (
		<div className='flex justify-center select-none mt-3 mb-8'>
			<a
				href='https://www.buymeacoffee.com/yellyoshua'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
					alt='Buy Me A Coffee'
					className='max-w-[174px] w-full'
				/>
			</a>
		</div>
	);

	const renderQuickActions = () => {
		return (
			<div className='text-center'>
				<DarkModeSwitchNoSSR />
			</div>
		);
	};

	return (
		<footer className='pt-10 sm:mt-10'>
			{children}
			<SocialLinksContainer />
			<Separator size='50' />

			{renderQuickActions()}

			<div className='py-5 text-center'>
				<p className='italic select-none text-base font-arvo text-black dark:text-white'>
					&quot;Primero en tu mente, luego en tu realidad&quot; - Julio Verne
				</p>
				<p className='text-center text-xs font-arvo text-black dark:text-gray-300'>
					Todo empieza en la mente de alguien.
				</p>
			</div>

			{renderBuyMeACoffe()}

			<div className='my-3 flex justify-center select-none'>
				<Link
					href='/yellyoshua'
					className='font-arvo border-2 px-2 py-2 font-bold text-gray-500 dark:text-white border-gray-500 hover:border-purple-700 hover:text-purple-700'
				>
					@yellyoshua
				</Link>
			</div>

			<div className='pt-2 pb-4'>
				<p className='text-center text-gray-500 text-xs font-arvo font-light dark:text-white'>
					© {copyright}
				</p>
			</div>
		</footer>
	);
}
