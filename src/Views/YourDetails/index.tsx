import dynamic from "next/dynamic";
import Head from "next/head";

const Footer = dynamic(() => import("../Components/Footer"));

export default function YourDetails() {
  return (
    <div>
      <Head>
        <title>Your Details</title>
        <meta name="description" content="Confirm your order - details" />
        <meta itemProp="name" content="Item Name" />
        <meta itemProp="description" content="Item Description" />
        <meta itemProp="image" content="Image content" />
      </Head>
      <div className="confirm-wrapper">
        <h1>Your Details</h1>
      </div>
      <Footer />
    </div>
  );
}
