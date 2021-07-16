import { CurrencyIconProps } from "./currencies.icon.types";

export function DongIcon(props: CurrencyIconProps) {
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
          id="dong_svg__a"
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
          d="M74.782 232a8 8 0 01-7.889-9.383A192.259 192.259 0 01222.618 66.893a8 8 0 112.764 15.76 176.214 176.214 0 00-142.73 142.729 8 8 0 01-7.87 6.618zm214.6 213.106a192.259 192.259 0 00155.725-155.724 8 8 0 10-15.759-2.764 176.214 176.214 0 01-142.73 142.729 8 8 0 102.764 15.76zM72 248a8 8 0 108 8 8 8 0 00-8-8zM256 64a8 8 0 108 8 8 8 0 00-8-8zm184 184a8 8 0 108 8 8 8 0 00-8-8zM256 432a8 8 0 108 8 8 8 0 00-8-8zm169.705-6.294A240 240 0 1086.3 86.294a240 240 0 10339.41 339.412zm-11.313-328.1A224 224 0 0197.608 414.392 224 224 0 01414.392 97.608zM296 360a8 8 0 00-8-8h-96a8 8 0 000 16h96a8 8 0 008-8zm-16-119.138V192h-24a8 8 0 010-16h24v-24a8 8 0 0116 0v24h24a8 8 0 010 16h-24v136a8 8 0 01-16 0v-8.862a56 56 0 110-78.276zM280 280a40 40 0 10-40 40 40.045 40.045 0 0040-40z"
          fill="url(#dong_svg__a)"
          data-original="url(#linear-gradient)"
        />
      </svg>
    );
  }
  