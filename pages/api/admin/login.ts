// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import redis from "../lib/redis";
import Database from "better-sqlite3";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const sqliteDb = new Database("orders.sqlite");
  const values = JSON.parse(req.body);
  let user = [];

  if (values.username && values.password) {
    const createTable = `CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    admin INTEGER DEFAULT 0
 )`;
    sqliteDb.exec(createTable);

    const loginRows = sqliteDb
      .prepare("SELECT * FROM users WHERE username=? LIMIT 1")
      .all(values.username);

    if (loginRows && loginRows[0]) {
      const { password, email, username } = loginRows[0];
      if (password === values.password)
        user.push({
          username: loginRows[0].username,
          admin: loginRows[0].admin,
          email: loginRows[0].email,
        });
    }
  }
  res.status(200).json(user && user[0] ? user[0] : false);
  sqliteDb.close();
}
