import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface RenderMarkdownProps extends React.HTMLAttributes<HTMLDivElement> {
	html?: boolean;
	markdown: string;
}

export const RenderMarkdown = ({
	markdown,
	html,
	...props
}: RenderMarkdownProps) => {
	return (
		<div {...props} className='bg-white w-full' style={{}}>
			{html ? (
				<article
					style={props.style}
					className={`prose prose-xl md:prose-lg ${props.className}`}
					dangerouslySetInnerHTML={{ __html: markdown }}
				/>
			) : (
				<ReactMarkdown
					className={`prose prose-xl md:prose-lg ${props.className}`}
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
				>
					{markdown}
				</ReactMarkdown>
			)}
		</div>
	);
};
