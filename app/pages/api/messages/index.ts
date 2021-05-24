import { NextApiRequest, NextApiResponse } from 'next'
import { sampleMessagesData, sampleMessagesId } from "@/utils/sample-data"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const methodNotAllowed = 405, ok = 200, internalError = 500, notFound = 404;

  function handlerGET(res: NextApiResponse) {
    try {
      if (!Array.isArray([])) {
        throw new Error('Cannot find messages')
      }

      return res.status(ok).json(sampleMessagesData)
    } catch (err) {
      return res.status(internalError).json({ statusCode: internalError, message: err.message })
    }
  }

  function handlerPOST(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body) || {}

    if (body.messagesId === sampleMessagesId) {
      return res.status(200).send("OK")
    } else {
      return res.status(notFound).send("Not found")
    }
  }

  function handlerDefault(res: NextApiResponse) {
    return res.status(methodNotAllowed).send("Method not allowed")
  }

  switch (req.method) {
    case "GET": return handlerGET(res)
    case "POST": return handlerPOST(req, res)
    default: return handlerDefault(res)
  }
}

export default handler
