import Link from 'next/link';
import ExternalLinkIcon from '@heroicons/react/outline/ExternalLinkIcon';

type ButtonLinkProps = {
	to: string;
	text: string;
	external?: boolean;
};

export function ButtonLink({ to, text, external }: ButtonLinkProps) {
	if (external) {
		return (
			<a
				target='_blank'
				href={to}
				className='duration-200 px-3 my-1 m-auto w-2/4 uppercase font-semibold border-2 border-white text-white hover:bg-white hover:text-black'
			>
				<div className='flex items-center justify-center'>
					<ExternalLinkIcon width='16px' height='16px' className='mx-1' />
					{text}
				</div>
			</a>
		);
	}

	return (
		<Link href={to}>
			<a className='duration-200 px-3 my-1 m-auto w-2/4 uppercase font-semibold border-2 border-white text-white hover:bg-white hover:text-black'>
				{text}
			</a>
		</Link>
	);
}
