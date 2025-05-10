import BaseIcon, { BaseIconProps } from "./Base/base";

type ProfileIconProps = Omit<BaseIconProps, "src" | "alt">;

export default function ProfileIcon({ ...rest }: ProfileIconProps) {
  return (
    <BaseIcon
      src="/icons/profile.svg"
      alt="profile"
      width={24}
      height={24}
      {...rest}
    />
  );
}
