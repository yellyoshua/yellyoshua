import Link from 'next/link';

export default function Logotipo() {
	return (
		<Link href='/'>
			<a>
				<p
					className='font-arvo font-bold antialiased dark:text-white text-black border-dotted'
					style={{ fontSize: 35, borderBottom: '15px black' }}
				>
					{' '}
					YELL
				</p>
			</a>
		</Link>
	);
}
