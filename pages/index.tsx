import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("../src/Views/Home"));

const HomeFunc: NextPage = () => {
  return <Home />;
};

export default HomeFunc;
