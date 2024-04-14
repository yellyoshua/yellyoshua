import React, { ReactNode, Fragment } from 'react';
import Head from 'next/head';
import { APP_NAME } from '@/app/config/app';
import Header from '@/app/components2/Header';
import Footer from '@/app/components2/Footer';

type LayoutProps = { children?: ReactNode; title?: string };

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
