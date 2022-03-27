import type { NextApiRequest, NextApiResponse } from "next";
import redis from "./lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await redis.flushdb();
  const items = [
    {
      id: 1,
      name: "Dry bagged pine",
      price: 150,
    },
    {
      id: 2,
      name: "Second",
      price: 300,
    },
    {
      id: 3,
      name: "Third",
      price: 500,
    },
    {
      id: 4,
      name: "Fourth",
      price: 10000,
    },
    {
      id: 5,
      name: "Fifth",
      price: 50,
    },
    {
      id: 6,
      name: "Six6h",
      price: 600,
    },
    {
      id: 6,
      name: "Six6h",
      price: 600,
    },
    {
      id: 6,
      name: "Six6h",
      price: 600,
    },
    {
      id: 6,
      name: "Six6h",
      price: 600,
    },
    {
      id: 6,
      name: "Six6h",
      price: 600,
    },
  ];

  items.forEach((item) => {
    redis.set(`item ${item.id}`, JSON.stringify(item));
  });

  return res.status(200).json(true);
}
