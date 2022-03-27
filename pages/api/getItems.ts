// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import redis from "./lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // const stream = redis.scanStream();
  let items: ItemType[] = [];

  // const data = await redis.get("item 1");
  // console.log(data);
  const keys = await redis.keys("item *");
  // console.log(keys);

  const pipeline = redis.pipeline();
  keys.forEach((key) => {
    pipeline.get(key);
  });
  const data = await pipeline.exec();
  data &&
    data.map((itemData) => {
      items.push(JSON.parse(itemData[1]));
    });

  // const datas = redis.keys("item *");
  // console.log(datas);
  // stream.on("data", function (chunk) {
  //   chunk.forEach(async (client: any) => {
  //     let data: any = await redis.get(client);
  //     console.log(JSON.parse(data));
  //     items.push(data);
  //   });
  // });
  // console.log(items);

  res.status(200).json(items);
}
