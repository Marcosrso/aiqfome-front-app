"use client";
import { ComponentProps, MouseEvent, useState } from "react";
import classNames from "classnames";

import styles from "./accordion.module.css";
import ArrowUpIcon from "@/icons/ArrowUp";
import ArrowDownIcon from "@/icons/ArrowDown";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AccordionProps extends Omit<ComponentProps<"button">, "onClick"> {
  title: string;
  subTitle?: string;
  onClick?: (isOpen?: boolean, event?: MouseEvent<HTMLButtonElement>) => void;
}

export default function Accordion({
  children,
  className,
  title,
  subTitle,
  onClick,
  ...rest
}: Readonly<AccordionProps>) {
  const buttonClassName = classNames(className, styles["accordion-wrapper"]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick(!isOpen, event);
    }
  };

  return (
    <div className={buttonClassName}>
      <button
        className={styles.header}
        onClick={(e) => handleOnClick(e)}
        {...rest}
      >
        <div className={styles['header-text']}>
          {title}
          {subTitle && <span className={styles["sub-title"]}>{subTitle}</span>}
        </div>
        <span className={styles.icon}>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </span>
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}
