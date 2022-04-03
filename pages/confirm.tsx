import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Confirm = dynamic(() => import("../src/Views/Confirm"));

const ConfirmFunc: NextPage = () => <Confirm />;

export default ConfirmFunc;
