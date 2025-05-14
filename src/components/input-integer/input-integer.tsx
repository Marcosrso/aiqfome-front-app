"use client";
import { ComponentProps } from "react";
import styles from "./input-integer.module.css";
import IconButton from "../button-icon/button-icon";

import Plus from "@/icons/Plus";
import Minus from "@/icons/Minus";
import Delete from "@/icons/Delete";

interface IntegerInputProps extends Omit<ComponentProps<"input">, "onChange"> {
  value: number;
  onChange?: (value?: number) => void;
  type?: "cart" | "details";
}

function IntegerInput({
  value = 0,
  onChange,
  type = "details",
}: IntegerInputProps) {
  const isDisabled = type === "details" && value <= 0;

  const increase = () => {
    if (typeof onChange === "function") {
      const increasedValue = value + 1;
      onChange(increasedValue);
    }
  };

  const decrement = () => {
    if (typeof onChange === "function") {
      const decrementedValue = value > 0 ? value - 1 : value;
      onChange(decrementedValue);
    }
  };

  return (
    <span className={styles.quantityWrapper}>
      <IconButton
        className={styles.quantityButton}
        onClick={decrement}
        disabled={isDisabled}
      >
        {type === "details" ? (
          <Minus color="white" />
        ) : (
          <>
            {value === 1 ? <Delete color="white" /> : <Minus color="white" />}
          </>
        )}
      </IconButton>

      <input
        className={styles.quantityArea}
        value={value}
        disabled
        onChange={(event) => {
          const inputValue = parseInt(event.target.value.trim());
          const isValidQuantity = !isNaN(inputValue) && inputValue >= 0;
          if (isValidQuantity && typeof onChange === "function") {
            onChange(inputValue || 0);
          }
        }}
      />

      <IconButton className={styles.quantityButton} onClick={increase}>
        <Plus color="white" />
      </IconButton>
    </span>
  );
}

export default IntegerInput;
