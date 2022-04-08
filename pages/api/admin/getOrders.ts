// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sqliteDb from "../lib/sqliteDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const createTable = `CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER PRIMARY KEY,
        name TEXT NOT NULL
     )`;
  sqliteDb.exec(createTable);
  const stmt = sqliteDb.prepare("SELECT * FROM orders");

  const rows = stmt.all();
  res.status(200).json(rows);
}
