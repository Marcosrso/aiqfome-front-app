import BaseIcon, { BaseIconProps } from "./Base/base";

type BikeIconProps = Omit<BaseIconProps, "src" | "alt">;

export default function BikeIcon({ ...rest }: BikeIconProps) {
  return (
    <BaseIcon
      src="/icons/bike.svg"
      alt="search"
      width={24}
      height={24}
      {...rest}
    />
  );
}
