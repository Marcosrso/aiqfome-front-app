import { ReactElement } from "react";
import styles from "./base.module.css";
import classNames from "classnames";
import { cloneElement, ComponentProps } from "react";

export interface BaseIconProps extends ComponentProps<"svg"> {
  children: ReactElement;
}

export default function BaseIcon({
  className,
  children,
  ...rest
}: BaseIconProps) {
  const baseIconClassName = classNames(className, styles["base-icon-box"]);
  return (
    <div className={baseIconClassName} aria-hidden="true">
      {cloneElement(children, {
        ...rest,
      })}
    </div>
  );
}
