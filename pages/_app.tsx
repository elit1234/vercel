import "../styles/MenuIcon.css";
import "../styles/Home.css";
import "../styles/Store.css";
import "../styles/ViewingItem.css";
import "../styles/Footer.css";
import "../styles/globals.css";
import "../styles/sidebar.css";
import "../styles/Cart.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Cart from "../src/Views/Cart";
// import Layout from "../src/Views/Components/Layout";
const Layout = dynamic(() => import("../src/Views/Components/Layout"));
const Footer = dynamic(() => import("../src/Views/Components/Footer"));
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let lastScrolled = window.scrollY;
      const topNav: HTMLElement = document.querySelector(".topNav-outer")!;
      const topBarName: HTMLElement = document.querySelector(".topBarName")!;

      window.addEventListener("scroll", () => {
        const newScroll = window.scrollY;
        if (topNav) {
          if (lastScrolled > newScroll || newScroll < 10) {
            topNav.style.opacity = "1";
            topBarName.style.opacity = "1";
          } else {
            topNav.style.opacity = "0";
            topBarName.style.opacity = "0";
          }
        }

        lastScrolled = window.scrollY;
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Cart />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
