import ReactMarkdown from 'react-markdown';

interface RenderMarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
	markdown: string;
}

export const RenderMarkdown = ({ markdown, ...props }: RenderMarkdownProps) => {
	return (
		<div {...props}>
			<ReactMarkdown className='markdown md:markdown-lg max-w-none'>
				{markdown}
			</ReactMarkdown>
		</div>
	);
};
