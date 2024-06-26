import React, { Fragment } from 'react';
import { Project } from '@/app/interfaces';
import Head from 'next/head';
import Header from '@/app/components2/Header';
import Footer from '@/app/components2/Footer';

interface PropTypes {
	children?: React.ReactNode;
	project: Project;
}

export default function ProjectsLayout({ children, project }: PropTypes) {
	return (
		<Fragment>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<title>{project.title}</title>
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='manifest' href='/manifest.json' />

				<meta name='description' content={project.description} />
				<meta name='keywords' content={project.keywords} />
				{/* <meta name="author" content={project.author} /> */}
				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow' />
				<meta name='google' content='nositelinkssearchbox' />
				<meta name='google' content='notranslate' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:image:alt' content={project.title} />
				{/* <meta property="og:url" content={project.url} /> */}
				<meta property='og:type' content='website' />
				<meta property='og:title' content={project.title} />
				<meta property='og:description' content={project.description} />
				{/* <meta property="og:image" content={project.image} /> */}
				<meta property='og:site_name' content={project.title} />
				<meta property='og:locale' content='en_US' />
			</Head>
			<div className='bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500'>
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
