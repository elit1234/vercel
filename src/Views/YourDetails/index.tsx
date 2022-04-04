import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";

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
        <div className="yourDetails-form">
          <input
            className="yourDetails-input"
            placeholder="Your First Name"
            style={{ gridArea: "firstName" }}
          />
          <input
            className="yourDetails-input"
            placeholder="Your Last Name Name"
            style={{ gridArea: "lastName" }}
          />
          <input
            className="yourDetails-input"
            placeholder="Your Email Address"
            style={{ gridArea: "emailAddress" }}
          />
          <input
            className="yourDetails-input"
            placeholder="Your Mobile Number"
            style={{ gridArea: "mobileNumber" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
