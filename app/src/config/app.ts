import { SocialLink } from 'src/interfaces';
import { LinkedinAlt } from '../assets/icons/LinkedinAlt';
import { TwitterAlt } from '../assets/icons/TwitterAlt';
import { TelegramAlt } from '../assets/icons/TelegramAlt';
import { GithubAlt } from '../assets/icons/GithubAlt';

export const APP_NAME: string = 'Yoshua Lopez | Software Engineer | Full Stack Developer';

export const COPYRIGHT: string = 'Copyright 2023 Yoshua López. All Rights Reserved.';

export const SOCIAL_LINKS: SocialLink[] = [
	{
		name: 'Linkedin',
		icon: LinkedinAlt,
		url: 'https://short.yoshualopez.com/linkedin',
	},
	{
		name: 'Twitter',
		icon: TwitterAlt,
		url: 'https://short.yoshualopez.com/twitter',
	},
	{
		name: 'Telegram',
		icon: TelegramAlt,
		url: 'https://short.yoshualopez.com/telegram',
	},
  {
    name: 'Github',
    icon: GithubAlt,
    url: 'https://short.yoshualopez.com/github',
  }
];
