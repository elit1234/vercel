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
      quantity: 10,
      options: [
        {
          label: "Size",
          required: true,
          subOptions: [
            {
              value: "small",
              label: "Small",
            },
            {
              value: "medium",
              label: "Medium",
            },
            {
              value: "large",
              label: "Large",
            },
          ],
        },
        {
          label: "Colour",
          required: true,
          subOptions: [
            {
              value: "grey",
              label: "Grey",
            },
            {
              value: "black",
              label: "Black",
            },
            {
              value: "orange",
              label: "Orange",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Second",
      quantity: 15,
      price: 300,
    },
    {
      id: 3,
      name: "Third",
      quantity: 20,
      price: 500,
    },
    {
      id: 4,
      name: "Fourth",
      quantity: 25,
      price: 10000,
    },
    {
      id: 5,
      name: "Fifth",
      quantity: 30,
      price: 50,
    },
    {
      id: 6,
      name: "Six6h",
      quantity: 10,
      price: 600,
    },
    {
      id: 7,
      name: "Six6h",
      quantity: 10,
      price: 600,
    },
    {
      id: 8,
      name: "Six6h",
      quantity: 10,
      price: 600,
    },
    {
      id: 9,
      name: "Six6h",
      quantity: 10,
      price: 600,
    },
    {
      id: 10,
      name: "Six6h",
      quantity: 10,
      price: 600,
    },
  ];

  items.forEach((item) => {
    redis.set(`item ${item.id}`, JSON.stringify(item));
  });

  return res.status(200).json(true);
}
