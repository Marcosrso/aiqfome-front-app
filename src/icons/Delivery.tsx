import BaseIcon, { BaseIconProps } from "./Base/base";

type DeliveryIconProps = Omit<BaseIconProps, "src" | "alt">;

export default function DeliveryIcon({ ...rest }: DeliveryIconProps) {
  return (
    <BaseIcon
      src="/icons/delivery.svg"
      alt="search"
      width={24}
      height={24}
      {...rest}
    />
  );
}
