"use client";
import Image from "next/image";
import styles from "./Footer.module.css";

function Footer() {
  const logo = {
    id: "1",
    imagePath: "/images/kraus-cloud-logo.svg",
    imageAltText: "Kraus Cloud logo",
    width: 100,
    height: 0,
    style: { width: "100%", height: "100%" },
  };
  return (
    <div className={`${styles.footer}`}>
      <Image
        src={logo.imagePath}
        width="10"
        height={logo.height}
        alt={logo.imageAltText}
        decoding="sync"
        className={`${styles.logo}`}
      ></Image>
    </div>
  );
}

export default Footer;
