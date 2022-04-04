import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const router = useRouter();

  const cartItems = useSelector((state: any) => state.cart && state.cart.items);
  const [items, setItems] = useState<any>(null);

  const loadItems = async () => {
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
                  price: dItem.price,
                  options: cartItem.options ? cartItem.options : [],
                });
              }
            });
          });
          setItems(dataArr);
        }
      });
  };

  function toggleFunc() {
    const firstLine = document.querySelector(".firstLine")!;
    const secondLine = document.querySelector(".secondLine")!;
    const thirdLine = document.querySelector(".thirdLine")!;

    const sidebarWrapper: HTMLElement =
      document.querySelector(".sidebarWrapper")!;
    sidebarWrapper.style.width = "0";
    firstLine.classList.remove("checked");
    secondLine.classList.remove("checked");
    thirdLine.classList.remove("checked");
  }

  useEffect(() => {
    if (cartItems) loadItems();
  }, [cartItems]);

  const closeCart = () => {
    const cartWrapper: HTMLElement = document.querySelector(".cart-wrapper")!;

    cartWrapper.classList.toggle("active");
  };

  const clickedButton = () => {
    if (items && items[0]) {
      router.push("/confirm");
    } else {
      if (router.pathname !== "/store") router.push("/store");
    }
    closeCart();
    toggleFunc();
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-items">
        {items &&
          items[0] &&
          items.map((item: any, key: number) => {
            return (
              <div key={key} className="cart-itemWrapper">
                <div className="cart-itemName">{item.name}</div>
                <div className="cart-itemAmount">x{item.amount}</div>
              </div>
            );
          })}
      </div>
      <div className="cart-confirmButton" onClick={() => clickedButton()}>
        {items && items[0] ? "Confirm & Adjust Order" : "Add items"}
      </div>

      <div className="cart-closeIcon" onClick={() => closeCart()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </div>
    </div>
  );
};

export default Cart;
