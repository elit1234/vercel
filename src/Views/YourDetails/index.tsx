import dynamic from "next/dynamic";
import Head from "next/head";
import words from "./words.json";

const Footer = dynamic(() => import("../Components/Footer"));

export default function YourDetails() {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const firstNum = getRandomInt(1, 10);
  const secondNum = getRandomInt(1, 10);

  console.log(words[firstNum]);
  console.log(words[secondNum]);
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
            placeholder="Your Last Name"
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
          <div className="yourDetails-question">
            <div className="yourDetails-questionLeft">
              <div className="yourDetails-questionWarn">Robot Test</div>

              <div className="yourDetails-questionText">
                What is {words[firstNum]} + {words[secondNum]}?
              </div>
            </div>
            <input
              className="yourDetails-input answer"
              style={{ gridArea: "answer" }}
              placeholder="Answer"
              pattern="[0-9]*"
              type="number"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
