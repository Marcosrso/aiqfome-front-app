import Image, { ImageProps } from "next/image";
import styles from "./base.module.css";
import classNames from "classnames";

export type BaseIconProps = ImageProps;

export default function ProfileIcon({
  src,
  alt,
  className,
  ...rest
}: BaseIconProps) {
  const baseIconClassName = classNames(className, styles["base-icon-box"]);
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className={baseIconClassName}
      {...rest}
    />
  );
}
