// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import sqliteDb from "./lib/sqliteDb";
import redis from "./lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const orderIp = `order-${ip}`;

  const lastOrder = await redis.get(orderIp);
  if (!lastOrder) {
    const { items, values } = JSON.parse(req.body);
    const { firstName, lastName, email, mobile, answer } = values;

    const createTable = `CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    mobile TEXT NOT NULL,
    items TEXT NOT NULL
 )`;
    sqliteDb.exec(createTable);

    sqliteDb
      .prepare(
        "INSERT INTO orders (firstName, lastName, email, mobile, items) VALUES (?, ?, ?, ?, ?)"
      )
      .run(firstName, lastName, email, mobile, JSON.stringify(items));

    const time = new Date();
    redis.set(orderIp, time.getTime());
    sqliteDb.close();
  }
  res.status(200).json(!lastOrder);
}
