import { ReactNode } from 'react';

type ButtonProps = {
	onPress?: () => void;
	icon?: ReactNode;
	children?: ReactNode;
	className?: string;
	external?: boolean;
};

export function Button({ onPress, children, className, icon }: ButtonProps) {
	const defaultStyle =
		'font-semibold bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-800';
	const linkStyle = `duration-200 px-3 py-1 rounded ${
		className ? className : defaultStyle
	}`;

	return (
		<div {...{ onPress }} className={linkStyle}>
			{icon && <div className='px-1'>{icon}</div>}
			{children}
		</div>
	);
}
