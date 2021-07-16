import { CurrencyIconProps } from "./currencies.icon.types";

export function SwissFrancIcon(props: CurrencyIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...props}
      >
        <linearGradient
          xmlns="http://www.w3.org/2000/svg"
          id="swiss-franc_svg__a"
          gradientTransform="matrix(1 0 0 -1 0 -12310)"
          gradientUnits="userSpaceOnUse"
          x1={0}
          x2={512}
          y1={-12566}
          y2={-12566}
        >
          <stop offset={0} stopColor="#00f1ff" />
          <stop offset={0.231} stopColor="#00d8ff" />
          <stop offset={0.514} stopColor="#00c0ff" />
          <stop offset={0.777} stopColor="#00b2ff" />
          <stop offset={1} stopColor="#00adff" />
        </linearGradient>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M512 256c0 141.387-114.613 256-256 256S0 397.387 0 256 114.613 0 256 0s256 114.613 256 256zm0 0"
          fill="url(#swiss-franc_svg__a)"
          data-original="url(#a)"
        />
        <g xmlns="http://www.w3.org/2000/svg" fill="#fff">
          <path
            d="M369.129 79H217.426c-30.985 0-56.188 25.203-56.188 56.188V311.02h-32.367c-8.281 0-15 6.714-15 15 0 8.28 6.719 15 15 15h32.367V418c0 8.285 6.715 15 15 15 8.282 0 15-6.715 15-15v-76.984h56.39c8.282 0 15-6.715 15-15 0-8.282-6.718-15-15-15h-56.39V135.187c0-14.44 11.746-26.187 26.188-26.187h151.703c8.281 0 15-6.715 15-15s-6.719-15-15-15zm0 0"
            data-original="#ffffff"
          />
          <path
            d="M350.594 228.645H231.84c-8.285 0-15 6.714-15 15 0 8.285 6.715 15 15 15h118.754c8.285 0 15-6.715 15-15 0-8.286-6.715-15-15-15zm0 0"
            data-original="#ffffff"
          />
        </g>
      </svg>
    );
  }