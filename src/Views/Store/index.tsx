import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = dynamic(() => import("../Components/Footer"));

export default function Store() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<any>([]);

  const loadItems = async () => {
    const blankArr: ItemType[] = [];
    Array.from(Array(8), (e, i) => {
      blankArr.push({
        id: Number(i),
      });
    });
    setItems(blankArr);
    const hostname = window.location.hostname;
    fetch(`http://${hostname}:3000/api/getItems`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) setItems(data);
        setLoading(false);
        router.prefetch("/item/1");
      });
  };

  useEffect(() => {
    if (typeof window !== "undefined") loadItems();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      });
    });

    const storeProducts = document.querySelectorAll(".store-product");
    storeProducts.forEach((storeProduct) => observer.observe(storeProduct));
  });

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
            items.map((item: ItemType, key: number) => {
              return (
                <div className="store-product" key={key}>
                  <div className="store-productImage" />
                  {loading ? (
                    <div className="store-skeleton name" />
                  ) : (
                    <div className="store-productTitle">{item.name}</div>
                  )}
                  {loading ? (
                    <div className="store-skeleton price" />
                  ) : (
                    <div className="store-productPrice">
                      {item.price
                        ? `$${Number(item.price / 100).toFixed(2)}`
                        : ""}
                    </div>
                  )}

                  <div
                    className="addToButton"
                    onClick={() => clickedItem(item, key)}
                  >
                    {item.options ? "View Options" : "View Item"}
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
