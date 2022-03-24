import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Store = dynamic(() => import("../src/Views/Store"));

const StoreFunc: NextPage = () => <Store />;

export default StoreFunc;
