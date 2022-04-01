import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Select from "react-select";

const ViewingItem = ({ id }: any) => {
  const [amount, setAmount] = useState<number>(1);
  const [item, setItem] = useState<ItemType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [values, setValues] = useState<any>();
  const [error, setError] = useState<boolean>(false);

  const [options, setOptions] = useState([
    {
      label: "Size",
      subOptions: [
        {
          value: "small",
          label: "Small",
        },
        {
          value: "medium",
          label: "Medium",
        },
        {
          value: "large",
          label: "Large",
        },
      ],
    },
    {
      label: "Colour",
      subOptions: [
        {
          value: "grey",
          label: "Grey",
        },
        {
          value: "black",
          label: "Black",
        },
        {
          value: "orange",
          label: "Orange",
        },
      ],
    },
  ]);

  useEffect(() => {
    let arrs: any = [];
    options &&
      options.map((opt, key) => {
        let intArr: any = {};
        intArr.key = key;
        arrs.push(intArr);
      });
    setValues(arrs);
  }, [options]);

  const loadItem = async () => {
    const hostname = window.location.hostname;
    const url = `http://${hostname}:3000/api/getItem/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  };

  const selectCustomStyles = {
    option: (provided: any) => ({
      ...provided,
      color: "black",
    }),
  };

  useEffect(() => {
    if (id) loadItem();
  }, [id]);
  const clickedMore = () => {
    setAmount(amount + 1);
  };

  const clickedLess = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  useEffect(() => {
    typeof window !== "undefined" &&
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  }, []);

  const clickedShowOptions = () => {
    setShowOptions(true);
    const optionsWrapper: HTMLElement = document.querySelector(
      ".viewingItem-optionsWrapper"
    )!;

    const vals = options.length * 12;

    optionsWrapper.style.height = `${vals}rem`;
  };

  const clickedHideOptions = () => {
    setShowOptions(false);
    const optionsWrapper: HTMLElement = document.querySelector(
      ".viewingItem-optionsWrapper"
    )!;
    optionsWrapper.style.height = "5rem";
    setError(false);
  };

  const clickedSelect = (key: number, e: any) => {
    let newArr: any = [];
    values &&
      values.map((val: any) => {
        if (val.key === key) {
          val.values = e;
        }
        newArr.push(val);
      });

    setValues(newArr);
  };

  const getValues = (key: number) => {
    let newArr: any = {};
    values &&
      values.map((val: any) => {
        if (val.key === key) {
          if (val.values) newArr = val.values;
        }
      });
    return newArr;
  };

  const clickedAdd = () => {
    setError(true);
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
      <div className="viewingItemImage">
        {loading && (
          <div className="viewingItem-skeleton">
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <Image
          src="/img/items/1.webp"
          layout="fill"
          quality="100"
          onLoadingComplete={() => {
            setLoading(false);
          }}
        />
      </div>
      <div className="viewingItemImages">
        <div
          className={
            loading
              ? "viewingItemImagesImage loading"
              : "viewingItemImagesImage"
          }
        />
        <div
          className={
            loading
              ? "viewingItemImagesImage loading"
              : "viewingItemImagesImage"
          }
        />
      </div>
      <div className="viewingItem-title">{item && item.name}</div>
      <div className="viewingItem-price">
        {item && `$${Number(item.price / 100).toFixed(2)}`}
      </div>
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
        className={
          showOptions
            ? "viewingItem-optionsWrapper active"
            : error
            ? "viewingItem-optionsWrapper error"
            : "viewingItem-optionsWrapper"
        }
        onClick={() => {
          if (!showOptions) clickedShowOptions();
        }}
      >
        {!showOptions && (
          <div className="viewingItem-option">
            Options
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
          </div>
        )}
        {showOptions && (
          <>
            <div
              className="viewingItem-closeIcon"
              onClick={() => clickedHideOptions()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </div>
            {options &&
              options.map((opt, key) => {
                return (
                  <div className="viewingItem-optionsOption" key={key}>
                    <div className="viewingItem-optionsOptionLeft">
                      {opt.label}
                    </div>
                    <div className="viewingItem-optionsOptionRight">
                      <div className="viewingItem-optionsDropdown">
                        <Select
                          options={opt.subOptions}
                          styles={selectCustomStyles}
                          onChange={(e) => clickedSelect(key, e)}
                          value={getValues(key)}
                          isSearchable={false}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>
      <div
        className="home-blackButtonWrapper blackButtonOverlay"
        style={{ margin: "1rem auto" }}
        onClick={() => clickedAdd()}
      >
        <div className="blackButton home-blackButton">Add to cart</div>
      </div>
      <div className="viewingItem-desc">
        Dry and ready to burn Bagged Gum firewood for a longer lasting burn.
        This is best utilised when added to a fire built on a base of softwood
        such as pine. The type of gum will varies throughout the season but is
        usually a mixture of blue and red gum.
      </div>
    </div>
  );
};

export default ViewingItem;
