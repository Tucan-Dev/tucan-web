import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import logo from "../../assets/icons/logo.svg";
import styles from "./styles.module.scss";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.container}>
      <nav>
        <Link href="/">
          <a>
            <Image src={logo} alt="logotipo" width={35} height={62} />
          </a>
        </Link>

        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                <h3>Inicio</h3>
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/orcamento">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                <h3>Orçamento</h3>
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/sobre">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                <h3>Sobre</h3>
              </a>
            </Link>
          </li>
        </ul>

        <button
          onClick={openMenu}
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
}
