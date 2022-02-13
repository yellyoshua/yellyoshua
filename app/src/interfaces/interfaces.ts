// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Message } from 'path/to/interfaces';

export interface DispatchStore<T> {
	payload?: Record<string, any>;
	type: T;
}

export interface Asset {
	height: number;
	width: number;
	url: string;
	fileName: string;
}

export interface SocialLink {
	name: string;
	icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
	url: string;
}

export interface Message {
	date: string | Date;
	author: string;
	isSender: boolean;
	isInfo: boolean;
	isReceiver: boolean;
	message: string;
	attachment?: Attachment;
}

export interface Attachment {
	fileName: string;
}
