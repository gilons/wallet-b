import { CurrencyIconProps } from "./currencies.icon.types";

export function SouthAfricanRandIcon(props: CurrencyIconProps) {
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
          id="south-african-rand_svg__a"
          gradientUnits="userSpaceOnUse"
          x1={256}
          x2={256}
          y1={496}
          y2={16}
        >
          <stop offset={0} stopColor="#12c2e9" />
          <stop offset={0.5} stopColor="#c471ed" />
          <stop offset={1} stopColor="#f64f59" />
        </linearGradient>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M74.782 232a8 8 0 01-7.889-9.383A192.259 192.259 0 01222.618 66.893a8 8 0 112.764 15.759 176.214 176.214 0 00-142.729 142.73A8 8 0 0174.782 232zm214.6 213.106a192.259 192.259 0 00155.725-155.724 8 8 0 10-15.76-2.764 176.214 176.214 0 01-142.729 142.73 8 8 0 102.764 15.759zM72 248a8 8 0 108 8 8 8 0 00-8-8zM256 64a8 8 0 108 8 8 8 0 00-8-8zm184 184a8 8 0 108 8 8 8 0 00-8-8zM256 432a8 8 0 108 8 8 8 0 00-8-8zm169.706-6.3A240 240 0 1086.294 86.3a240 240 0 10339.412 339.41zM414.392 97.6A224 224 0 0197.608 414.392 224 224 0 01414.392 97.608zM216 256v88a8 8 0 01-16 0V168a8 8 0 018-8h72a48 48 0 014.823 95.758l42.332 84.664a8 8 0 11-14.31 7.156L267.056 256zm64-80h-64v64h64a32 32 0 000-64z"
          fill="url(#south-african-rand_svg__a)"
          data-original="url(#linear-gradient)"
        />
      </svg>
    );
  }
  