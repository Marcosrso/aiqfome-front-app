"use client";
import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import IconButton from "../icon-button/icon-button";
import Button from "../button/button";

import ProfileIcon from "@/icons/Profile";
import LocationIcon from "@/icons/Location";

export default function Header() {
  return (
    <header className={styles.container}>
      <Logo />
      <AddressButton />
      <IconButton size="sm">
        <ProfileIcon />
      </IconButton>
    </header>
  );
}

function AddressButton() {
  const addressOnClick = () => {
    alert("Digite seu endereço");
  };

  return (
    <span className={styles["address-box"]}>
      <span className={styles["address-icon-box"]}>
        <LocationIcon />
      </span>
      <span className={styles["address-label-box"]}>
        <p className={styles["address-label"]}>entregando em</p>
        <Button onClick={addressOnClick} className={styles["address-label-button"]}>
          Rua Mandaguari, 198 {">"}
        </Button>
      </span>
    </span>
  );
}

function Logo() {
  return (
    <Link href="/" title="Início">
      <Image
        src="/images/aiq-branding.png"
        alt="aiqfome-logo"
        width={32}
        height={32}
      />
    </Link>
  );
}
