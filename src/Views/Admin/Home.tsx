import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [items, setItems] = useState<ItemType[]>([]);

  const loadItems = () => {
    const hostname = window.location.host;
    const url = `http://${hostname}/api/admin/getItems`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const userClickedItem = (item: ItemType) => {
    router.push(`/admin/item/${item.id}`);
    console.log(item);
  };

  useEffect(() => {
    let placerItems: ItemType[] = [];
    Array.from(Array(6), (e, i) => {
      placerItems.push({
        name: "Loading...",
      });
    });
    setItems(placerItems);
    loadItems();
  }, []);

  return (
    <div className="admin-home-container">
      <Head>
        <title>Admin Home</title>
      </Head>

      <div className="admin-home-itemsWrapper">
        {items &&
          items.map((item, key) => {
            return (
              <div
                className="admin-home-item"
                key={key}
                onClick={() => userClickedItem(item)}
              >
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
