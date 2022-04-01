import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import Cart from "../src/Views/Cart";
import { wrapper } from "../src/redux/store";

import "../styles/MenuIcon.css";
import "../styles/Home.css";
import "../styles/Store.css";
import "../styles/ViewingItem.css";
import "../styles/Footer.css";
import "../styles/globals.css";
import "../styles/sidebar.css";
import "../styles/Cart.css";
import "../styles/toast.css";

const Layout = dynamic(() => import("../src/Views/Components/Layout"));
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
  }, []);
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
        <div id="toast">
          <div id="toastImg" />
          <div id="toastDesc" />
        </div>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.getServerSideProps = wrapper.getInitialAppProps();

export default wrapper.withRedux(MyApp);
