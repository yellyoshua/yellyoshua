import { VercelRequest, VercelResponse } from '@vercel/node';

export default (_: VercelRequest, response: VercelResponse) => {
  response.status(200).send("ok");
};