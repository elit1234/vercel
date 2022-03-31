import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = dynamic(() => import("../Components/Footer"));

export default function Store() {
  const router = useRouter();
  const [items, setItems] = useState<any>([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ]);

  const loadItems = async () => {
    const hostname = window.location.hostname;
    fetch(`http://${hostname}:3000/api/getItems`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setItems(data);
        router.prefetch("/item/1");
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") loadItems();
  }, []);

  const clickedItem = (item: ItemType, key: number) => {
    let notItems: any = [];
    let isItem: any = {};
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
      <div style={{ paddingTop: "7rem", paddingLeft: "1rem" }}>
        <h1>Our Store</h1>
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
      <Footer />
    </div>
  );
}
