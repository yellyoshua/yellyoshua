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

				<link
					href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap'
					rel='stylesheet'
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap'
					rel='stylesheet'
				></link>
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
			<style global jsx>{`
				img {
					pointer-events: none;
				}
			`}</style>
		</Fragment>
	);
}
