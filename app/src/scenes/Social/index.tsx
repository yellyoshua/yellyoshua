import { useState } from 'react';
import Tooltip from '@/app/components2/Tooltip';
import DownArrow from '@/app/assets/icons/DownArrow';
import * as application from '@/app/config/app';

export default function Social() {
	const [activeHover, setActiveHover] = useState(false);
	const socialLinks = application.SOCIAL_LINKS;

	return (
		<div
			onMouseLeave={() => setActiveHover(false)}
			onMouseEnter={() => setActiveHover(true)}
		>
			<div className='py-3'>
				<p
					className={`text-center text-black dark:text-white font-bold text-2xl font-arvo uppercase antialiased`}
				>
					Connect WITH ME
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
							<a href={social.url} target='_blank' rel='noopener noreferrer'>
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
		</div>
	);
};
