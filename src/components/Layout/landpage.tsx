import React, { useState } from "react";
import { Drawer } from "react-rainbow-components";

import Head from "next/head";
import Image from "next/image";

import styles from "./landpage.module.scss";

import Logo from "../../assets/icons/logo.svg";
import Link from "next/link";

interface Props {
  title?: string;
  children: any;
}

export function Landpage({ children, title }: Props) {
  const [state, setState] = useState({
    isOpen: false,
  });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={styles.container}>
        <header className={styles.navbar}>
          <Link href="/">
            <a>
              <Image src={Logo} alt="logotipo" width={35} height={62} />
            </a>
          </Link>

          <button
            className={styles.btn_navbar}
            onClick={() =>
              setState({
                isOpen: true,
              })
            }
          >
            <i className="ri-menu-line ri-2x" />
          </button>

          <Drawer
            id="drawer-1"
            className={styles.drawer}
            slideFrom="right"
            header="Menu"
            isOpen={state.isOpen}
            onRequestClose={() => setState({ isOpen: false })}
          >
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/orcamento">
                  <a>Orçamento</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a>Sobre</a>
                </Link>
              </li>
            </ul>
          </Drawer>
        </header>

        <main>{children}</main>
      </div>
    </>
  );
}
