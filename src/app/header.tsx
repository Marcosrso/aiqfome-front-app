"use client";
import Input from "../components/input/input";

import styles from "./header.module.css";
import AddressButton from "./address-button";
import Logo from "./logo";
import ProfileButton from "./profile-button";

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


