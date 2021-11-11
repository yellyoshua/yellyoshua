import Link from 'next/link';
import Image from 'next/image';
import { useAppStore } from '@/app/flux/store';
import { DarkModeSwitch, SeparateLine } from '@/app/components';
import { SocialLinksContainer } from './SocialLinksContainer';

export function Footer() {
	const copyright = useAppStore((state) => state.copyright);

	const renderBuyMeACoffe = () => (
		<div className='flex justify-center select-none mt-3 mb-8'>
			<a
				href='https://www.buymeacoffee.com/yellyoshua'
				target='_blank'
				rel='noreferrer'
			>
				<Image
					src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
					alt='Buy Me A Coffee'
					height='41'
					width='174'
				/>
			</a>
		</div>
	);

	const renderQuickActions = () => {
		return (
			<div className='text-center'>
				<DarkModeSwitch />
			</div>
		);
	};

	return (
		<footer className='pt-10 sm:mt-10'>
			<SocialLinksContainer />
			<SeparateLine size='50' />

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
				<Link href='/yellyoshua'>
					<a className='font-arvo border-2 px-2 py-2 font-bold text-gray-500 dark:text-white border-gray-500 hover:border-purple-700 hover:text-purple-700'>
						@yellyoshua
					</a>
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
