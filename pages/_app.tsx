import "../styles/MenuIcon.css";
import "../styles/Home.css";
import "../styles/globals.css";
import "../styles/sidebar.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";
import Layout from "../src/Views/Components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
