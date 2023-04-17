// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

// Get a variable name and return with key-val as string and using formatter
// To-Do: Put in a rex for allowed-chars-list
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: `${req.body.name}` })
}