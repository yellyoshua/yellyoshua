import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_: VercelRequest, response: VercelResponse) {
	response.status(200).send('ok');
};
