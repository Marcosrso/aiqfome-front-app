import BaseIcon, { BaseIconProps } from "./Base/base";

type ArrowUpIconProps = Omit<BaseIconProps, "src" | "alt" | "children">;

export default function ArrowUpIcon({ ...rest }: ArrowUpIconProps) {
  return (
    <BaseIcon {...rest}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2455_3523)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.22773 15.7653C5.08161 15.6133 5 15.4107 5 15.1998C5 14.989 5.08161 14.7864 5.22773 14.6343L11.4497 8.23435C11.5209 8.16031 11.6063 8.1014 11.7008 8.06116C11.7953 8.02093 11.897 8.00019 11.9997 8.00019C12.1024 8.00019 12.2041 8.02093 12.2986 8.06116C12.3931 8.1014 12.4785 8.16031 12.5497 8.23435L18.7717 14.6343C18.9178 14.7864 18.9995 14.989 18.9995 15.1998C18.9995 15.4107 18.9178 15.6133 18.7717 15.7653C18.7005 15.8394 18.6151 15.8983 18.5206 15.9385C18.4261 15.9788 18.3244 15.9995 18.2217 15.9995C18.119 15.9995 18.0173 15.9788 17.9228 15.9385C17.8283 15.8983 17.7429 15.8394 17.6717 15.7653L11.9997 9.93135L6.32773 15.7653C6.25653 15.8394 6.17112 15.8983 6.07661 15.9385C5.9821 15.9788 5.88044 15.9995 5.77773 15.9995C5.67501 15.9995 5.57335 15.9788 5.47884 15.9385C5.38433 15.8983 5.29892 15.8394 5.22773 15.7653Z"
            fill="#6D6F73"
          />
        </g>
        <defs>
          <clipPath id="clip0_2455_3523">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </BaseIcon>
  );
}
