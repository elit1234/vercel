import { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state: any) => state.cart && state.cart.items);

  const loadItems = async () => {
    const itemIds: number[] = [];
    items &&
      items.map((item: any) => {
        itemIds.indexOf(item.id) === -1 && itemIds.push(item.id);
      });
    // const hostname = window.location.hostname;
    // const url = `http://${hostname}:3000/api/getArrItem`;
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(itemIds),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //   });
  };

  useEffect(() => {
    loadItems();
  }, [items]);

  const closeCart = () => {
    const cartWrapper: HTMLElement = document.querySelector(".cart-wrapper")!;

    cartWrapper.classList.toggle("active");
  };

  return (
    <div className="cart-wrapper">
      <h1>Cart</h1>
      <pre>{JSON.stringify(items, null, 4)}</pre>
      <div className="cart-closeIcon" onClick={() => closeCart()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </div>
    </div>
  );
};

export default Cart;
