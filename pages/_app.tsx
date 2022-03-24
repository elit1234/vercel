import "../styles/MenuIcon.css";
import "../styles/Home.css";
import "../styles/globals.css";
import "../styles/sidebar.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
