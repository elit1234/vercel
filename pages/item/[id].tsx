import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ViewingItem = dynamic(() => import("../../src/Views/ViewingItem"));

const ViewingItemFunc: NextPage = ({ item }) => {
  const router = useRouter();
  const { id } = router.query;

  return <ViewingItem item={item} />;
};

export default ViewingItemFunc;

export async function getServerSideProps(context: any) {
  const hostname = process.env.SELF_URL || null;
  const loadItem = async () => {
    const url = `http://${hostname}:3000/api/getItem/10`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const item = await loadItem();
  return {
    props: {
      item: JSON.parse(JSON.stringify(item)),
    },
  };
}
