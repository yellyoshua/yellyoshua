import React from 'react';
import IconText from '@/app/components2/IconText';

interface PropTypes {
	label: string;
	content: React.ReactNode;
	icon: React.ReactNode;
}

export default function BoxLabel({label, content, icon}: PropTypes) {
	
	return (
		<div className='flex items-start justify-center flex-col text-sm m-0 md:m-auto text-black dark:text-white'>
			<IconText className='text-black dark:text-white' icon={icon}>
				<strong className='dark:text-white'>{label} </strong>
			</IconText>
			{content}
		</div>
	);
}