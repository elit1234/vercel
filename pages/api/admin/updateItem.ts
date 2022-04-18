// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import redis from "../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;
  const data = JSON.parse(body);
  const { id, name, price }: ItemType = data;

  await redis.set(`item ${id}`, body);

  return res.status(200).json(true);
}
