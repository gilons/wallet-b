import { CurrencyIconProps } from "./currencies.icon.types";

export function ShekelIcon(props: CurrencyIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...props}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M416 512H96c-53.023 0-96-42.977-96-96V96C0 42.977 42.977 0 96 0h320c53.023 0 96 42.977 96 96v320c0 53.023-42.977 96-96 96zm0 0"
          fill="#f5e6fe"
          data-original="#f5e6fe"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M256 138.672c-64.703 0-117.328 52.64-117.328 117.328S191.312 373.328 256 373.328 373.328 320.688 373.328 256 320.703 138.672 256 138.672zm-21.328 162.656c0 4.414-3.582 8-8 8-4.414 0-8-3.586-8-8v-90.672c0-4.418 3.586-8 8-8h24c16.176 0 29.328 13.153 29.328 29.328v26.672c0 4.414-3.586 8-8 8s-8-3.586-8-8V232c0-7.36-5.984-13.328-13.328-13.328h-16zm69.328 0c0 4.414-3.586 8-8 8h-24c-16.176 0-29.328-13.152-29.328-29.328v-26.672a8 8 0 0116 0V280c0 7.36 5.984 13.328 13.328 13.328h16v-82.672c0-4.418 3.586-8 8-8s8 3.582 8 8zm0 0"
          fill="#be63f9"
          data-original="#be63f9"
        />
      </svg>
    );
  }