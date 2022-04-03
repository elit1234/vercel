import type { NextPage } from "next";
import dynamic from "next/dynamic";

const YourDetails = dynamic(() => import("../src/Views/YourDetails"));

const YourDetailsFunc: NextPage = () => <YourDetails />;

export default YourDetailsFunc;
