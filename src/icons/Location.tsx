import BaseIcon, { BaseIconProps } from "./Base/base";

type LocationIconProps = Omit<BaseIconProps, "src" | "alt">;

export default function LocationIcon({ ...rest }: LocationIconProps) {
  return (
    <BaseIcon
      src="/icons/location.svg"
      alt="location"
      width={24}
      height={24}
      {...rest}
    />
  );
}
