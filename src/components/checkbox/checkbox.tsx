"use client";
import { ComponentProps } from "react";
import classNames from "classnames";

import styles from "./checkbox.module.css";

interface CheckboxProps extends Omit<ComponentProps<"input">, "type"> {
  label: string;
}

export function Checkbox({ label, className, ...rest }: CheckboxProps) {
  const checkboxClassname = classNames(className, styles.checkbox);

  return (
    <label className={checkboxClassname}>
      <input type="checkbox" {...rest} />
      <span>{label}</span>
    </label>
  );
}
