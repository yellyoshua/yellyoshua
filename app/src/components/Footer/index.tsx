import { useState } from 'react';
import { useAppStore } from 'src/flux/store';
import { Tooltip, SeparateLine } from 'src/components/index';
import DownArrow from '@/app/icons/svg/DownArrow';
import Link from 'next/link';

export function Footer() {
	const [activeHover, setActiveHover] = useState(false);
	const { copyright, socialLinks } = useAppStore((state) => ({
		copyright: state.copyright,
		socialLinks: state.socialLinks,
	}));

	const renderBuyMeACoffe = () => (
		<div className='flex justify-center select-none mt-3 mb-8'>
			<a href='https://www.buymeacoffee.com/yellyoshua' target='_blank'>
				<img
					className='transform transition-all skew-y-6 hover:scale-125'
					src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
					alt='Buy Me A Coffee'
					height='41'
					width='174'
				/>
			</a>
		</div>
	);

	return (
		<footer
			onMouseLeave={() => setActiveHover(false)}
			onMouseEnter={() => setActiveHover(true)}
			className='pt-10 sm:mt-10'
		>
			<div className='py-3'>
				<p
					className={`text-center text-black dark:text-white font-bold text-2xl font-arvo uppercase antialiased`}
				>
					Redes sociales
				</p>
				<DownArrow
					className={`m-auto mt-10 mb-5 ${
						activeHover ? 'text-black dark:text-white' : 'text-gray-500'
					} fill-current animate-bounce`}
				/>
			</div>

			<div className='w-full justify-center md:flex-auto md:flex-row-reverse pt-3 pb-7 flex-row flex'>
				{socialLinks.map((social, index) => {
					return (
						<Tooltip key={index} tooltip={social.name}>
							<a href={social.url} target='_blank'>
								<div className='mx-1 text-center p-2'>
									<social.icon
										width='24'
										height='24'
										className='fill-current text-gray-500 hover:text-black dark:hover:text-white transition-all'
									/>
								</div>
							</a>
						</Tooltip>
					);
				})}
			</div>

			<SeparateLine size='50' />
			<div className='py-5 text-center'>
				<p className='italic select-none text-base font-arvo text-black dark:text-white'>
					"Primero en tu mente, luego en tu realidad" - Julio Verne
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
