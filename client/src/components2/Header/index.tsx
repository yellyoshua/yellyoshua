import Link from 'next/link';
import { useRouter } from 'next/router';
import Separator from '../Separator';
import Logotipo from '../Logotipo';

interface HeaderProps {}

const navLinks = [
	{ text: 'Home', to: '/' },
	{ text: 'About me', to: '/about-me' },
	{ text: 'Knowledges', to: '/knowledges' },
	{ text: 'Contact me', to: '/contact' },
];

export default function Header({}: HeaderProps) {
	const router = useRouter();
	const currentPath = router.asPath;

	return (
		<header className='w-full'>
			<div className='w-full justify-center py-3 flex mx-auto'>
				<Logotipo />
			</div>
			<nav className='w-full flex flex-row justify-center mb-3'>
				{navLinks.map((navLink, index) => (
					<div key={index} className='px-2'>
						<Link
							href={navLink.to}
							className={`uppercase border-b-2 font-arvo antialiased text-xs md:text-sm
                  ${
										navLink.to === currentPath
											? 'font-bold border-black dark:border-white text-black dark:text-white'
											: 'font-light text-gray-500 dark:text-gray-400'
									} 
              border-transparent hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all`}
						>
							{navLink.text}
						</Link>
					</div>
				))}
			</nav>
			<Separator size='25' />
		</header>
	);
}
