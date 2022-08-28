import { useEffect, useRef } from 'react';
import { appearanceStore } from '@/app/store/appearance.store';

interface PropTypes extends React.HTMLAttributes<HTMLDivElement> {
	markdown?: string;
}

export const RenderMarkdown = ({markdown, ...props}: PropTypes) => {
	const isDarkMode = appearanceStore((state) => state.darkMode);
	const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    isDarkMode
      ? ref.current?.classList.add("prose-dark")
      : ref.current?.classList.remove("prose-dark");
  }, [isDarkMode]);

	return (
		<div {...props} className='bg-white dark:bg-gray-900 w-full'>
			<article
				style={props.style}
				className={`prose prose-xl md:prose-lg ${props.className}`}
				ref={ref}
				dangerouslySetInnerHTML={{ __html: markdown || '' }}
			/>
		</div>
	);
};
