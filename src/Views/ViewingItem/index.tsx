import Head from "next/head";
import { useState } from "react";

const ViewingItem = ({ id }: any) => {
  const [amount, setAmount] = useState<number>(1);

  const clickedMore = () => {
    setAmount(amount + 1);
  };

  const clickedLess = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  return (
    <div className="viewingItem">
      <Head>
        <title>Viewing Item</title>
        <meta name="description" content="Page description" />
        <meta itemProp="name" content="Item Name" />
        <meta itemProp="description" content="Item Description" />
        <meta itemProp="image" content="Image content" />
      </Head>
      <div className="viewingItemImage" />
      <div className="viewingItemImages">
        <div className="viewingItemImagesImage" />
        <div className="viewingItemImagesImage" />
      </div>
      <div className="viewingItem-title">This Item Name</div>
      <div className="viewingItem-price">$15.00</div>
      <div className="viewingItem-totalsWrapper">
        <div
          className="viewingItem-totalsTotal"
          style={{ gridArea: "totalsTop" }}
          onClick={() => clickedMore()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="viewingItemSvg"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
          </svg>
        </div>
        <div
          className="viewingItem-totalsTotal alt"
          style={{ gridArea: "totalsBottom" }}
          onClick={() => clickedLess()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="viewingItemSvg alt"
          >
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        </div>
        <div style={{ gridArea: "totalsRight" }}>{amount}</div>
      </div>
      <div
        className="home-blackButtonWrapper blackButtonOverlay"
        style={{ margin: "1rem auto" }}
      >
        <div className="blackButton home-blackButton">Add to cart</div>
      </div>
    </div>
  );
};

export default ViewingItem;
