import Link from "next/link";
import React from "react";
import styles from "../styles/MainMenu.module.scss";

const MainMenu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
