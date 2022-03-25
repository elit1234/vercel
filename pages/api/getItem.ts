// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  GetStaticPropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import fs from "fs";
import path from "path";
// const { dirname } = require('path');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemType>
) {
  console.log(req.body);
  const rawLoc = path.join(path.dirname(__dirname), "api/1.json");
  const ex = JSON.parse(fs.readFileSync(rawLoc));
  console.log(ex);

  const item: ItemType = {
    id: 1,
    name: "FIRSTITEM",
    price: 100,
  };
  return res.status(200).json(item);
}
