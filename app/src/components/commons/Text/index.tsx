interface TextProps {
	children?: string;
	className?: string;
}

export const Text = ({ children, className = '' }: TextProps) => {
	const defaultClasses = 'font-varela';
	return <p className={defaultClasses.concat(className)}>{children}</p>;
};
