// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import redis from "./lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const itemIds: any[] = req.body;

  console.log(itemIds);
  let items: ItemType[] = [];
  let returnItems: ItemType[] = [];

  const keys = await redis.keys("item *");

  const pipeline = redis.pipeline();
  keys.forEach((key) => {
    pipeline.get(key);
  });
  const data = await pipeline.exec();
  data &&
    data.map((itemData) => {
      items.push(JSON.parse(itemData[1]));
    });

  if (items && items[0]) {
    items.map((item) => {
      if (itemIds.includes(item.id)) returnItems.push(item);
    });
  }

  res.status(200).json(returnItems);
}
