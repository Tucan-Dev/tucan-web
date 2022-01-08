import type { AppProps } from "next/app";

import "../styles/globals.scss";
import "remixicon/fonts/remixicon.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
