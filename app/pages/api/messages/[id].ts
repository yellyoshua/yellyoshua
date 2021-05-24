import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  const ok = 200

  return res.status(ok).json([])
}

export default handler