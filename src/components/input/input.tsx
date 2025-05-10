import { ComponentProps } from "react";
import classNames from "classnames";

import SearchIcon from "@/icons/Search";

import styles from "./input.module.css";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...rest }: InputProps) {
  const inputClassname = classNames(className, styles["input-box"]);
  return <input className={inputClassname} {...rest} />;
}

Input.Search = function InputSearch({ className, ...rest }: InputProps) {
  const inputSearchClassname = classNames(
    className,
    styles["search-input-box"]
  );
  return (
    <div className={styles["search-input-wrapper"]}>
      <span className={styles["search-icon"]}>
        <SearchIcon />
      </span>
      <Input className={inputSearchClassname} {...rest} />
    </div>
  );
};
