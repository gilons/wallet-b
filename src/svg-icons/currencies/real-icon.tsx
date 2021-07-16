import { CurrencyIconProps } from "./currencies.icon.types";

export function RealIcon(props: CurrencyIconProps) {
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
          d="M512 256c0 141.387-114.613 256-256 256S0 397.387 0 256 114.613 0 256 0s256 114.613 256 256zm0 0"
          fill="#f8d539"
          data-original="#f8d539"
        />
        <g xmlns="http://www.w3.org/2000/svg" fill="#fff">
          <path
            d="M448 208h32v32h-32zm0 0M448 272h32v32h-32zm0 0M240 216c0-30.93-25.07-56-56-56h-72v192h32v-80h7.441l59.2 88.879 26.625-17.758-47.793-71.68C218.059 268.688 239.903 244.72 240 216zm-56 24h-40v-48h40c13.254 0 24 10.746 24 24s-10.746 24-24 24zm0 0M328 192h72v-32h-48v-32h-32v32.816c-29.05 4.145-49.945 30.055-47.84 59.32 2.11 29.27 26.496 51.923 55.84 51.864h16c13.254 0 24 10.746 24 24s-10.746 24-24 24h-72v32h48v32h32v-32.816c29.05-4.145 49.945-30.055 47.84-59.32-2.11-29.27-26.496-51.923-55.84-51.864h-16c-13.254 0-24-10.746-24-24s10.746-24 24-24zm0 0"
            data-original="#ffffff"
          />
        </g>
      </svg>
    );
  }
  