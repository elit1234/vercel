import "../styles/MenuIcon.css";
import "../styles/Home.css";
import "../styles/Store.css";
import "../styles/ViewingItem.css";
import "../styles/Footer.css";
import "../styles/globals.css";
import "../styles/sidebar.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import Layout from "../src/Views/Components/Layout";
const Layout = dynamic(() => import("../src/Views/Components/Layout"));
const Footer = dynamic(() => import("../src/Views/Components/Footer"));
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let lastScrolled = window.scrollY;
      const topNav: HTMLElement = document.querySelector(".topNav-outer")!;

      window.addEventListener("scroll", () => {
        if (lastScrolled > window.scrollY) {
          topNav.style.background = "rgba(88, 88, 88, 1)";
        } else {
          topNav.style.background = "transparent";
        }

        lastScrolled = window.scrollY;
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
