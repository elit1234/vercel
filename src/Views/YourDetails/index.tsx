import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import words from "./words.json";

const Footer = dynamic(() => import("../Components/Footer"));

export default function YourDetails() {
  const items = useSelector((state: any) => state.cart.items);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    answer: 0,
  });
  const [number, setNumber] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  useEffect(() => {
    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const firstNum = getRandomInt(1, 10);
    const secondNum = getRandomInt(1, 10);

    setNumber([firstNum, secondNum]);
  }, []);

  const handleInputChange = (target: any, value: any) => {
    if (target === "answer")
      return setValues({
        ...values,
        [target]: Number(value),
      });
    return setValues({
      ...values,
      [target]: value,
    });
  };

  const valuesCheck = () => {
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.mobile &&
      values.answer
    ) {
      const shouldTotal = number[0] + number[1];
      if (values.answer === shouldTotal) return true;
    }
    return false;
  };
  /*

const loadItem = async () => {
    const hostname = window.location.hostname;
    const url = `http://${hostname}:3000/api/getItem/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        if (data.options) setOptions(data.options);
        setLoadingItems(false);
      });
  };

  */

  const submitForm = () => {
    const formValues = {
      items,
      values,
    };
    const hostname = window.location.hostname;
    const url = `http://${hostname}:3000/api/submitCart`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const userClickedSubmit = () => {
    let localSuccess = false;
    if (!submitting) {
      setSubmitting(true);
      const validValues = valuesCheck();
      if (validValues) localSuccess = true;

      setTimeout(() => {
        setSubmitting(false);
        if (localSuccess) setSuccess(true);
      }, 1500);
      if (localSuccess) {
        submitForm();

        setTimeout(() => {
          const el = document.querySelector(".yourDetails-wrapper")!;
          const confirmEl = document.querySelector(
            ".yourDetails-confirmWrapper"
          )!;
          el.classList.add("move-left");
          confirmEl.classList.add("move-left");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }, 2500);
      }
    }
  };
  return (
    <div>
      <Head>
        <title>Your Details</title>
        <meta name="description" content="Confirm your order - details" />
        <meta itemProp="name" content="Item Name" />
        <meta itemProp="description" content="Item Description" />
        <meta itemProp="image" content="Image content" />
      </Head>
      <div className="yourDetails-wrapper">
        <h1>Your Details</h1>
        <div className="yourDetails-form">
          <input
            className="yourDetails-input"
            placeholder="Your First Name"
            style={{ gridArea: "firstName" }}
            value={values.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
          <input
            className="yourDetails-input"
            placeholder="Your Last Name"
            style={{ gridArea: "lastName" }}
            value={values.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
          <input
            className="yourDetails-input"
            placeholder="Your Email Address"
            style={{ gridArea: "emailAddress" }}
            value={values.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <input
            className="yourDetails-input"
            placeholder="Your Mobile Number"
            style={{ gridArea: "mobileNumber" }}
            value={values.mobile}
            onChange={(e) => handleInputChange("mobile", e.target.value)}
          />
          <div className="yourDetails-question">
            <div className="yourDetails-questionLeft">
              <div className="yourDetails-questionWarn">Robot Test</div>

              <div className="yourDetails-questionText">
                What is <span>{words[number[0]]}</span> +{" "}
                <span>{words[number[1]]}</span>?
              </div>
            </div>
            <input
              className="yourDetails-input answer"
              style={{ gridArea: "answer" }}
              placeholder="Answer"
              pattern="[0-9]*"
              type="number"
              value={values.answer}
              onChange={(e) => handleInputChange("answer", e.target.value)}
            />
          </div>
          <div
            className={
              submitting
                ? "yourDetails-submit submitting"
                : "yourDetails-submit"
            }
            onClick={() => userClickedSubmit()}
          >
            {submitting ? (
              <>
                <div className="yourDetails-submit-loading">
                  <div></div>
                  <div></div>
                </div>
              </>
            ) : (
              <>{success ? "Order submitted" : "Submit Order"}</>
            )}
          </div>
        </div>
      </div>
      <div className="yourDetails-confirmWrapper">
        <h1>Thanks for your order!</h1>
        <h2>We will be in touch with you at {values.email} very shortly.</h2>
      </div>
      <Footer />
    </div>
  );
}
