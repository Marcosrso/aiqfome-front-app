"use client";
import { ComponentProps } from "react";
import classNames from "classnames";

import styles from "./button.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentProps<"button"> {
  skin?: "transparent" | "dark" | "primary";
  fullWidth?: boolean;
}

export default function Button({
  children,
  className,
  type = "button",
  skin = "transparent",
  fullWidth = false,
  ...rest
}: Readonly<ButtonProps>) {
  const buttonClassName = classNames(
    className,
    styles["button-box"],
    styles[`button-${skin}`],
    { [styles.fullWidth]: fullWidth }
  );

  return (
    <button className={buttonClassName} type={type} {...rest}>
      {children}
    </button>
  );
}
