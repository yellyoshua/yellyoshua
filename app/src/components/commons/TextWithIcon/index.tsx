import { ReactNode } from 'react';

interface TextWithIconProps {
	icon: ReactNode;
	children: string | ReactNode;
	noMargin?: boolean;
	right?: boolean;
	className?: string;
}

function TextWithIcon({
	icon,
	children,
	noMargin,
	right,
	className,
}: TextWithIconProps) {
	return (
		<div className={`flex items-center ${noMargin ?? 'my-3'} max-w-xs`}>
			{!right && icon}
			<p
				className={`${
					className ? className : 'text-black dark:text-white'
				} flex-1 break-all`}
			>
				{children}
			</p>
			{right && icon}
		</div>
	);
}

export default TextWithIcon;
