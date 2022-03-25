import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Store() {
  const router = useRouter();
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
  ]);

  const clickedItem = (item: ItemType, key: number) => {
    let notItems: any = [];
    let isItem: any = {};
    // alert("clicked " + item.name);
    const items = document.querySelectorAll(".store-product");
    if (items) {
      items.forEach((fItem, itemKey) => {
        if (itemKey !== key) notItems.push(fItem);
        else isItem = fItem;
      });
    }
    console.log(notItems);
    notItems &&
      notItems.map((notItem: HTMLElement) => {
        setTimeout(() => {
          router.push("/item/" + item.id);
        }, 200);
        notItem.style.width = "0";
        notItem.style.minWidth = "0";
        notItem.style.opacity = "0";
        notItem.style.maxWidth = "0";
      });
    console.log(isItem);
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
                    onClick={() => clickedItem(item, key)}
                  >
                    View Options
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
