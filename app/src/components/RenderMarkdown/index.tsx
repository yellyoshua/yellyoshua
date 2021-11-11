import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface RenderMarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
	markdown: string;
}

export const RenderMarkdown = ({ markdown, ...props }: RenderMarkdownProps) => {
	return (
		<div {...props}>
			<ReactMarkdown
				className='markdown markdown-green md:markdown-lg max-w-none text-black dark:text-white'
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
			>
				{markdown}
			</ReactMarkdown>
		</div>
	);
};
