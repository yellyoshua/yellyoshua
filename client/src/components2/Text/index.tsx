interface TextProps {
	children?: string;
	className?: string;
}

export default function Text({ children, className = '' }: TextProps) {
	const defaultClasses = 'font-varela';
	return <p className={defaultClasses.concat(className)}>{children}</p>;
};
