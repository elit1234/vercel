import Head from "next/head";
import { useState } from "react";

export default function Store() {
  const [items, setItems] = useState<ItemType[] | undefined>([
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
  ]);

  const clickedItem = (item: ItemType) => {
    alert("clicked " + item.name);
  };

  return (
    <div>
      <Head>
        <title>Store</title>
        <meta name="description" content="Page description" />
        <meta itemProp="name" content="Item Name" />
        <meta itemProp="description" content="Item Description" />
        <meta itemProp="image" content="Image content" />
      </Head>
      <div className="store-Wrapper">
        <div className="store-Top">
          <div className="overlay-store topOverlay">
            <h1>Our Store</h1>
          </div>
        </div>
      </div>
      <div className="store-Outer">
        <div>Sort By Latest</div>
        <div className="store-productCategories">Product Categories</div>
        <div className="store-products">
          {items &&
            items.map((item, key) => {
              return (
                <div className="store-product" key={key}>
                  <div className="store-productImage" />
                  <div className="store-productTitle">{item.name}</div>
                  <div className="store-productPrice">
                    {item.price
                      ? `$${Number(item.price / 100).toFixed(2)}`
                      : ""}
                  </div>
                  <div
                    className="addToButton"
                    onClick={() => clickedItem(item)}
                  >
                    Add to cart
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
