import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, removeFromCart } from "../../redux/cart";

const Cart = () => {
  const dispatch = useAppDispatch();

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
                  options: cartItem.options ? cartItem.options : [],
                });
              }
            });
          });
          setItems(dataArr);
        }
      });
  };

  useEffect(() => {
    if (cartItems) loadItems();
  }, [cartItems]);

  const closeCart = () => {
    const cartWrapper: HTMLElement = document.querySelector(".cart-wrapper")!;

    cartWrapper.classList.toggle("active");
  };

  const clickedItem = (item: any) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-items">
        {items &&
          items[0] &&
          items.map((item: any, key: number) => {
            return (
              <div
                key={key}
                className="cart-itemWrapper"
                onClick={() => clickedItem(item)}
              >
                {item.name}(id: ${item.id}), amount: {item.amount}
              </div>
            );
          })}
      </div>
      <div className="cart-confirmButton">Confirm Order</div>

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
