import { SocialLink } from 'src/interfaces';
import { LinkedinAlt } from '../assets/icons/LinkedinAlt';
import { TwitterAlt } from '../assets/icons/TwitterAlt';
import { Instagram } from '../assets/icons/Instagram';
import { TelegramAlt } from '../assets/icons/TelegramAlt';

export const APP_NAME: string = 'Yoshua Lopez | YELL';

export const COPYRIGHT: string =
	'Copyright 2021 Yoshua López. All Rights Reserved.';

export const SOCIAL_LINKS: SocialLink[] = [
	{
		name: 'Linkedin',
		icon: LinkedinAlt,
		url: 'https://www.linkedin.com/in/yellyoshua/',
	},
	{
		name: 'Twitter',
		icon: TwitterAlt,
		url: 'https://twitter.com/yellyoshua/',
	},
	{
		name: 'Instagram',
		icon: Instagram,
		url: 'https://www.instagram.com/yellyoshua/',
	},
	{
		name: 'Telegram',
		icon: TelegramAlt,
		url: 'https://t.me/yellyoshua/',
	},
];

export const PROJECTS = [
	{
		imageURL: '/assets/images/mika-baumeister-QBCS3iSKAyE-unsplash.jpg',
		name: 'Whatsapp Book',
		description:
			"It's an app that parse the whatsapp chat and export converted chat as PDF, JSON or HTML.",
		projectPath: '/project/whatsapp-book',
		development: false,
		isExternalLink: false,
	},
	{
		imageURL: '/assets/images/cyrus-crossan-ZqsY740eAOo-unsplash.jpg',
		name: 'Elections App',
		description:
			"It's an app for elections electoral. In construction with the blockchain tecnology.",
		projectPath: '/project/elections-app',
		development: true,
		isExternalLink: false,
	},
	{
		imageURL: '/assets/images/element5-digital-OyCl7Y4y0Bk-unsplash.jpg',
		name: 'Arcos Learning',
		description: "It's an app of questions and answers",
		projectPath: 'https://arcoslearning.firebaseapp.com/',
		development: false,
		isExternalLink: true,
	},
];
