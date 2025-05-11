import BaseIcon, { BaseIconProps } from "./Base/base";

type StarIconProps = Omit<BaseIconProps, "src" | "alt">;

export default function StarIcon({ ...rest }: StarIconProps) {
  return (
    <BaseIcon
      src="/icons/star.svg"
      alt="search"
      width={24}
      height={24}
      {...rest}
    />
  );
}
