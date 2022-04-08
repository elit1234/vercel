// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import sqliteDb from "./lib/sqliteDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log(ip);
  const { items, values } = JSON.parse(req.body);
  console.log(values);

  const createTable = `CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
 )`;
  sqliteDb.exec(createTable);

  const stmt = sqliteDb.prepare("INSERT INTO orders (name) VALUES (?)");
  const info = stmt.run("First order Name");
  sqliteDb.close();
  res.status(200).json(true);
}
