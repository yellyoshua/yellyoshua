import React, { ReactNode, Fragment } from 'react';
import Head from 'next/head';
import { APP_NAME } from '@/app/config/app';
import Header from '@/app/components2/Header';
import Footer from '@/app/components2/Footer';

type LayoutProps = { children?: ReactNode; title?: string };

const description =
	'I am a Software Developer with knowledge in JavaScript, React Web and Mobile development, Test Driven Development, Agile methodologies, and Colective Property. I am looking for a position that will allow me to use my skills and knowledge to make a difference in the world.';

export default function MainLayout({
	children,
	title = APP_NAME,
}: LayoutProps) {
	return (
		<Fragment>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<title>{title}</title>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='manifest' href='/manifest.json' />

				<meta property='description' content={description} />
				<meta property='og:image' content='/assets/pictures/yellyoshua.png' />
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:url' content='https://yoshualopez.com'></meta>
			</Head>
			<div>
				<Header />
				{children}
				<Footer />
			</div>
			<script
				type='text/javascript'
				dangerouslySetInnerHTML={{
					__html: `
					(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "d7wkdxyom1");
				`,
				}}
			></script>
		</Fragment>
	);
}
