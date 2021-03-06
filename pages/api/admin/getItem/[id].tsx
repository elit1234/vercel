// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import redis from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;

  const itemData = await redis.get(`item ${id}`);

  return res.status(200).json(itemData ? itemData : false);
}
