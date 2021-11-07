import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  const notFound = 404;
  return res.status(notFound).send("Not found")
}

export default handler
