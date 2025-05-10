import { ComponentProps } from "react";
import styles from "./icon-button.module.css";
import classNames from "classnames";

interface IconButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "md";
}

export default function IconButton({
  children,
  className,
  size = 'md',
  ...rest
}: Readonly<IconButtonProps>) {
  const buttonClassName = classNames(
    className,
    styles['button-box'],
    styles[`button-box-${size}`]
  );

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
}
