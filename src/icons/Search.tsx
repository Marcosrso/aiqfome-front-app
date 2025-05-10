import BaseIcon, { BaseIconProps } from "./Base/base";

type SearchIconProps = Omit<BaseIconProps, "src" | "alt">;

export default function SearchIcon({ ...rest }: SearchIconProps) {
  return (
    <BaseIcon
      src="/icons/search.svg"
      alt="search"
      width={24}
      height={24}
      {...rest}
    />
  );
}
