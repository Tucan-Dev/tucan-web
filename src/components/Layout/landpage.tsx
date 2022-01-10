import Head from "next/head";

import styles from "./landpage.module.scss";

import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";

interface Props {
  title?: string;
  children: any;
}

export function Landpage({ children, title }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
