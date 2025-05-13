"use client";
import { ComponentProps } from "react";
import classNames from "classnames";

import styles from "./tag.module.css";

type TagProps = ComponentProps<"div"> & {
  type?: "info" | "success";
};

export function Tag({ children, className, type = "info", ...rest }: TagProps) {
  const tagClassname = classNames(
    className,
    styles.tag,
    styles[`tag-${type}`]
  );

  return (
    <div className={tagClassname} {...rest}>
      {children}
    </div>
  );
}
