import type { NextPage } from "next";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../src/Views/About"));

const AboutFunc: NextPage = () => <About />;

export default AboutFunc;
