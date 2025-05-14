"use client";
import LocationIcon from "@/icons/Location";
import Button from "../components/button/button";
import Skeleton from "@/components/skeleton/skeleton";
import ArrowRightIcon from "@/icons/ArrowRight";

import styles from "./header.module.css";
import { useUserStore } from "@/stores/userStore";

export default function AddressButton() {
  const user = useUserStore((state) => state.user);

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
          {user ? (
            <>
              {user?.address.street}, {user?.address.number}
              &nbsp;
              <ArrowRightIcon width={16} height={16} />
            </>
          ) : (
            <Skeleton width="150px" height="20px" />
          )}
        </Button>
      </span>
    </span>
  );
}
