import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {
	markdown?: string;
}

export default function RenderMarkdown({markdown, ...props}: PropTypes) {
	const { systemTheme, theme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;

	const isDarkMode = currentTheme === 'dark';
	const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    isDarkMode
      ? ref.current?.classList.add("prose-dark")
      : ref.current?.classList.remove("prose-dark");
  }, [isDarkMode]);

	return (
		<div {...props} className='bg-white dark:bg-gray-900 transition-colors duration-500 w-full'>
			<article
				style={props.style}
				className={`prose prose-xl md:prose-lg ${props.className}`}
				ref={ref}
				dangerouslySetInnerHTML={{ __html: markdown || '' }}
			/>
		</div>
	);
};
