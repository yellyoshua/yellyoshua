import Link from 'next/link';
import ExternalLinkIcon from '@heroicons/react/outline/ExternalLinkIcon';

type ButtonLinkProps = {
	to: string;
	text: string;
	external?: boolean;
};

export default function ButtonLink({ to, text, external }: ButtonLinkProps) {
	if (external) {
		return (
			<a
				rel='noopener noreferrer'
				target='_blank'
				href={to}
				className='duration-200 px-3 my-1 m-auto w-2/4 uppercase font-semibold border-2 border-white text-white hover:bg-white hover:text-black'
			>
				<div className='flex items-center justify-center font-arvo text-sm py-[2px] m-0'>
					<ExternalLinkIcon className='mx-1 w-5' />
					{text}
				</div>
			</a>
		);
	}

	return (
		<Link
			href={to}
			className='duration-200 px-3 my-1 m-auto w-2/4 uppercase font-semibold border-2 border-white text-white hover:bg-white hover:text-black font-arvo text-sm py-[2px]'
		>
			{text}
		</Link>
	);
}
