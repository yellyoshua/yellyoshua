import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logotipo, SeparateLine } from 'src/components/index';

interface HeaderProps {}

const navLinks = [
	{ text: 'Home', to: '/' },
	// { text: 'Servicios', to: '/services' },
	{ text: 'About me', to: '/about-me' },
	{ text: 'Blog', to: '/blog' },
];

export function Header({}: HeaderProps) {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<header className='w-full'>
			<div className='w-full justify-center py-3 flex mx-auto'>
				<Logotipo />
			</div>
			<nav className='w-full flex flex-row justify-center mb-3'>
				{navLinks.map((navLink, index) => (
					<div key={index} className='px-2'>
						<Link href={navLink.to}>
							<a
								className={`uppercase border-b-2 font-arvo antialiased text-xs md:text-sm
                  ${
										currentPath.includes(navLink.to)
											? 'font-bold border-black dark:border-white text-black dark:text-white'
											: 'font-light text-gray-500 dark:text-gray-400'
									} 
              border-transparent hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all`}
							>
								{navLink.text}
							</a>
						</Link>
					</div>
				))}
			</nav>
			<SeparateLine size='25' />
		</header>
	);
}
