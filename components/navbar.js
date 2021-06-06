import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <div className={styles.logo}>
            <img className={styles.image} src="logo.png"></img>
            <span className={styles.logotext}>Public School Speech</span>
          </div>
        </a>
      </Link>
      <div className={styles.options}>
        <Link href="/about">
          <a>
            <span className={styles.subheading}>About Us</span>
          </a>
        </Link>
        <Link href="/announcements">
          <a>
            <span className={styles.subheading}>Announcements</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
