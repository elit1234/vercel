import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, removeFromCart } from "../../redux/cart";

const Footer = dynamic(() => import("../Components/Footer"));

export default function Confirm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [extended, setExtended] = useState<any>([]);
  const [clickedNext, setClickedNext] = useState<any>(false);
  const cartItems = useSelector((state: any) => state.cart && state.cart.items);
  const itemsAmount = cartItems && cartItems[0] ? cartItems.length : 0;

  const isExtended = (id: number) => {
    const exItems = extended;

    const found = exItems && exItems.filter((exItem: any) => exItem === id);

    if (found[0]) return true;
    else return false;
  };

  const clickedItem = (id: any) => {
    if (!isExtended(id)) {
      const element = document.getElementById(id)!;
      element.classList.add("is-extended");
      setTimeout(() => {
        addToExtended(Number(id));
      }, 100);
    }
  };

  const clickedClose = (id: any) => {
    const element = document.getElementById(id)!;
    element.classList.remove("is-extended");
    removeFromExtended(Number(id));
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

    setTimeout(() => {
      router.push("/your-details");
    }, 1800);
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
                  {isExtended(keyId) && (
                    <>
                      <div
                        className="confirm-closeWindow"
                        onClick={() => clickedClose(keyId)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                        </svg>
                      </div>
                      <div
                        className="confirm-deleteWindow"
                        onClick={() => {
                          clickedClose(keyId);
                          dispatch(removeFromCart(key));
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        </svg>
                      </div>
                    </>
                  )}
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

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    className="confirm-itemOption-rightEdit"
                                  >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                                  </svg>
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
                        <div className="confirm-itemOption">
                          <div className="confirm-itemOption-left">Amount:</div>
                          <div className="confirm-itemOption-right">
                            {item.amount}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <div className="confirm-infoWrapper">
          <div className="confirm-infoTitle">Order info</div>
          <div className="confirm-infoRow">
            <div className="confirm-infoSubtitle">Subtotal</div>
            <div className="confirm-infoAmount">$1234</div>
          </div>{" "}
          <div className="confirm-infoRow">
            <div className="confirm-infoSubtitle">Subtotal</div>
            <div className="confirm-infoAmount">$1234</div>
          </div>{" "}
          <div className="confirm-infoRow">
            <div className="confirm-infoSubtitle">Shipping Cost</div>
            <div className="confirm-infoAmount">$23</div>
          </div>{" "}
          <div className="confirm-infoRow">
            <div className="confirm-infoSubtitle">Total</div>
            <div className="confirm-infoAmount">$23</div>
          </div>
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
