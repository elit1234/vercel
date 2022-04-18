import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import toggleToast from "../Components/toggleToast";

const ViewingItem = ({ id }: any) => {
  const router = useRouter();
  const [item, setItem] = useState<ItemType>();
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const [loadingItems, setLoadingItems] = useState<boolean>(true);
  const [values, setValues] = useState({
    price: 0,
    name: "",
    quantity: 1,
  });

  const handleInputChange = (target: any, value: string | number) => {
    setValues({
      ...values,
      [target]: value,
    });
  };

  useEffect(() => {
    loadItem();
  }, []);
  const loadItem = async () => {
    const hostname = window.location.host;
    const url = `http://${hostname}/api/getItem/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data: ItemType) => {
        setItem(data);
        if (data && data.name)
          setValues({
            name: data.name,
            price: Number(data.price),
            quantity: data.amount ? data.amount : 0,
          });
        setLoadingItems(false);
      });
  };

  useEffect(() => {
    if (id) loadItem();
  }, [id]);
  const clickedMore = () => {
    handleInputChange("quantity", values.quantity + 1);
  };

  const clickedLess = () => {
    if (values.quantity > 1) handleInputChange("quantity", values.quantity - 1);
  };

  useEffect(() => {
    typeof window !== "undefined" &&
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  }, []);

  const userClickedSave = () => {
    if (typeof window !== "undefined") {
      const hostname = window.location.host;
      const url = `http://${hostname}/api/admin/updateItem`;
      console.log(url);
      const newObj = {
        id: item?.id,
        name: values.name,
        price: Number(values.price),
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(newObj),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toggleToast(true, `Successfully updated ${values.name}`);
            router.push("/admin/home");
          } else toggleToast(false, "Something went wrong.");
        });
    }
  };

  return (
    <>
      <div className="viewingItem">
        <Head>
          <title>Admin - Editing Item</title>
          <meta name="description" content="Page description" />
          <meta itemProp="name" content="Item Name" />
          <meta itemProp="description" content="Item Description" />
          <meta itemProp="image" content="Image content" />
        </Head>
        <div className="viewingItemImage">
          {loadingImage && (
            <div className="viewingItem-skeleton image">
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
            layout="responsive"
            quality="100"
            width="300"
            height="300"
            onLoadingComplete={() => {
              setLoadingImage(false);
            }}
          />
        </div>
        <div className="viewingItemImages">
          <div
            className={
              loadingImage
                ? "viewingItemImagesImage loading"
                : "viewingItemImagesImage"
            }
          />
          <div
            className={
              loadingImage
                ? "viewingItemImagesImage loading"
                : "viewingItemImagesImage"
            }
          />
        </div>
        {!loadingItems && (
          <>
            <p className="viewingItem-editingTitle">Price</p>
            <input
              className="viewingItem-price editing"
              value={values.price}
              min="1"
              step="any"
              type="number"
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
            <p className="viewingItem-editingTitle">Name</p>
            <input
              className="viewingItem-title"
              value={values.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </>
        )}
        {loadingItems && (
          <>
            <div className="viewingItem-skeleton title" />
            <div className="viewingItem-skeleton price" />
          </>
        )}
        <p className="viewingItem-editingTitle" style={{ paddingTop: "1rem" }}>
          Item Stock
        </p>
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
          <div style={{ gridArea: "totalsRight" }}>{values.quantity}</div>
        </div>

        {loadingItems ? (
          <div className="viewingItem-skeleton desc" />
        ) : (
          <>
            <p className="viewingItem-editingTitle">Item Description</p>
            <textarea
              rows={10}
              cols={20}
              className="viewingItem-desc editing"
              defaultValue={`Dry and ready to burn Bagged Gum firewood for a longer lasting burn.
          This is best utilised when added to a fire built on a base of
          softwood such as pine. The type of gum will varies throughout the
          season but is usually a mixture of blue and red gum.`}
            />
          </>
        )}
        <div
          className="home-blackButtonWrapper blackButtonOverlay"
          style={{ margin: "1rem auto" }}
          onClick={() => userClickedSave()}
        >
          <div className="blackButton home-blackButton">Save Item</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewingItem;
