import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ViewingItem = dynamic(() => import("../../src/Views/ViewingItem"));

const ViewingItemFunc: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <ViewingItem id={id} />;
};

export default ViewingItemFunc;
