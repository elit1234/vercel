import Head from "next/head";

export default function Store() {
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
          <div className="store-product">First</div>
          <div className="store-product">Second</div>
          <div className="store-product">Third</div>
          <div className="store-product">Fourth</div>
        </div>
      </div>
    </div>
  );
}
