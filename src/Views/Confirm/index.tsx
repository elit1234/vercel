import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Footer = dynamic(() => import("../Components/Footer"));

export default function Confirm() {
  const router = useRouter();
  const [extended, setExtended] = useState<any>([]);
  const [clickedNext, setClickedNext] = useState<any>(false);
  const cartItems = useSelector((state: any) => state.cart && state.cart.items);
  const itemsAmount = cartItems && cartItems[0] ? cartItems.length : 0;

  const clickedItem = (id: any) => {
    const element = document.getElementById(id)!;
    element.classList.toggle("is-extended");

    const isActive = element.classList.contains("is-extended");
    if (isActive) addToExtended(Number(id));
    else removeFromExtended(Number(id));
  };

  const addToExtended = (id: number) => {
    setExtended([...extended, id]);
  };

  const removeFromExtended = (id: number) => {
    const exItems = extended;
    let arr = [];
    arr = exItems && exItems.filter((exItem: any) => exItem !== id);
    setExtended(arr);
  };

  const isExtended = (id: number) => {
    const exItems = extended;

    const found = exItems && exItems.filter((exItem: any) => exItem === id);

    if (found[0]) return true;
    else return false;
  };

  const [items, setItems] = useState<any[]>([
    {
      id: 1,
      name: "Please wait...",
    },
    {
      id: 2,
      name: "Please wait...",
    },
    {
      id: 3,
      name: "Please wait...",
    },
    {
      id: 4,
      name: "Please wait...",
    },
    {
      id: 5,
      name: "Please wait...",
    },
    {
      id: 6,
      name: "Please wait...",
    },
    {
      id: 7,
      name: "Please wait...",
    },
    {
      id: 8,
      name: "Please wait...",
    },
  ]);

  useEffect(() => {
    if (cartItems) {
      const itemIds: number[] = [];
      cartItems &&
        cartItems.map((item: any) => {
          itemIds.indexOf(item.id) === -1 && itemIds.push(item.id);
        });
      const hostname = window.location.hostname;
      const url = `http://${hostname}:3000/api/getArrItem`;
      fetch(url, {
        method: "POST",
        body: JSON.stringify(itemIds),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            let dataArr: any[] = [];
            cartItems.map((cartItem: any) => {
              console.log(cartItem);
              data.map((dItem: ItemType) => {
                if (dItem.id === cartItem.id) {
                  dataArr.push({
                    id: cartItem.id,
                    name: dItem.name,
                    amount: cartItem.amount,
                    options: cartItem.options ? cartItem.options : [],
                    price: dItem.price,
                  });
                }
              });
            });
            setItems(dataArr);
          }
        });
    }
  }, [cartItems]);

  const userClickedNext = () => {
    setClickedNext(true);
    router.push("/your-details");
    setTimeout(() => {}, 2000);
  };

  return (
    <div>
      <Head>
        <title>Confirm Order</title>
        <meta name="description" content="Confirm your order" />
        <meta itemProp="name" content="Item Name" />
        <meta itemProp="description" content="Item Description" />
        <meta itemProp="image" content="Image content" />
      </Head>
      <div className="confirm-wrapper">
        <h1>Confirm your order</h1>
        <div className="">Your items ({itemsAmount})</div>
        <div className="confirm-itemsContainer">
          {items &&
            items.map((item: ItemType, key) => {
              const keyId = key + 1; //Because arrays start at 0, returns false for isExtended
              return (
                <div
                  className="confirm-itemWrapper"
                  id={keyId.toString()}
                  key={keyId}
                  onClick={() => clickedItem(keyId)}
                >
                  {!isExtended(keyId) &&
                    `${item.name} ($${Number(
                      item.price && item.price / 100
                    ).toFixed(2)})`}
                  {isExtended(keyId) && (
                    <div className="confirm-extendedWindow">
                      {item.options && item.options[0] ? (
                        <div className="confirm-itemOptions">
                          {item.options.map((opt, optKey) => {
                            return (
                              <div key={optKey} className="confirm-itemOption">
                                <div className="confirm-itemOption-left">
                                  {opt.label && opt.label}:
                                </div>
                                <div className="confirm-itemOption-right">
                                  {opt.values &&
                                    opt.values.label &&
                                    opt.values.label}
                                </div>
                              </div>
                            );
                          })}
                          <div className="confirm-itemOption">
                            <div className="confirm-itemOption-left">
                              Amount:
                            </div>
                            <div className="confirm-itemOption-right">1</div>
                          </div>
                        </div>
                      ) : (
                        <div className="confirm-noOptions">
                          No options selected
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        <div
          className={
            clickedNext ? "confirm-nextButton is-active" : "confirm-nextButton"
          }
          onClick={() => userClickedNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
          </svg>
          Your Details
        </div>
      </div>
      <Footer />
    </div>
  );
}
