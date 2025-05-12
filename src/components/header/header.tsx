"use client";
import Image from "next/image";
import Link from "next/link";
import IconButton from "../icon-button/icon-button";
import Button from "../button/button";
import Input from "../input/input";

import ProfileIcon from "@/icons/Profile";
import LocationIcon from "@/icons/Location";

import styles from "./header.module.css";
import ArrowRightIcon from "@/icons/ArrowRight";

export default function Header() {
  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles["main-container"]}>
        <Logo />
        <AddressButton />
        <ProfileButton />
      </div>
      <div className={styles["input-container"]}>
        <Input.Search placeholder="busque pela loja ou culinária" />
      </div>
    </header>
  );
}

function AddressButton() {
  const addressOnClick = () => {
    alert("Digite seu endereço");
  };

  return (
    <span className={styles["address-wrapper"]}>
      <span className={styles["address-icon-container"]}>
        <LocationIcon />
      </span>
      <span className={styles["address-label-container"]}>
        <p className={styles["address-label"]}>entregando em</p>
        <Button
          onClick={addressOnClick}
          className={styles["address-label-button"]}
        >
          Rua Mandaguari, 198 <ArrowRightIcon width={16} height={16} />
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

function ProfileButton() {
  return (
    <IconButton size="sm" aria-label="Meu perfil">
      <ProfileIcon />
    </IconButton>
  );
}
