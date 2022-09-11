import React, { ReactNode, Fragment } from 'react';
import Head from 'next/head';
import { APP_NAME } from '@/app/config/app';
import { Header, Footer } from '@/app/components';

type LayoutProps = { children?: ReactNode; title?: string };

export function Layout({ children, title = APP_NAME }: LayoutProps) {
	return (
		<Fragment>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<title>{title}</title>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
			</Head>
			<div className='bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500'>
				<Header />
				{children}
				<Footer />
			</div>
			<script
				async
				src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7465243281843526'
				crossOrigin='anonymous'
			></script>
			<script
				type="text/javascript"
				dangerouslySetInnerHTML={{__html: `
					(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "d7wkdxyom1");
				`}}
			></script>
		</Fragment>
	);
}
