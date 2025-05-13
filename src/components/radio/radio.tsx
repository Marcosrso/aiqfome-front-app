"use client";
import { ComponentProps } from "react";
import classNames from "classnames";

import styles from "./radio.module.css";

interface RadioProps extends Omit<ComponentProps<"input">, "type"> {
  label: string;
}

export function Radio({ label, className, ...rest }: RadioProps) {
  const radioClassname = classNames(className, styles.radio);
  
  return (
    <label className={radioClassname}>
      <input type="radio" {...rest} />
      <span>{label}</span>
    </label>
  );
}
