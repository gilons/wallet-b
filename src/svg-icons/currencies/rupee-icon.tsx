import { CurrencyIconProps } from "./currencies.icon.types";

export function RupeeIcon(props: CurrencyIconProps) {
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
          id="rupee_svg__a"
          gradientUnits="userSpaceOnUse"
          x1={256}
          x2={256}
          y1={512}
          y2={0}
        >
          <stop offset={0} stopColor="#a93aff" />
          <stop offset={1} stopColor="#ff81ff" />
        </linearGradient>
        <linearGradient
          xmlns="http://www.w3.org/2000/svg"
          id="rupee_svg__b"
          gradientUnits="userSpaceOnUse"
          x1={256}
          x2={256}
          y1={451}
          y2={61}
        >
          <stop offset={0} stopColor="#ffbef9" />
          <stop offset={1} stopColor="#fff1ff" />
        </linearGradient>
        <g xmlns="http://www.w3.org/2000/svg">
          <circle
            cx={256}
            cy={256}
            fill="url(#rupee_svg__a)"
            r={256}
            data-original="url(#SVGID_1_)"
          />
          <path
            d="M256 61C148.48 61 61 148.48 61 256s87.48 195 195 195 195-87.48 195-195S363.52 61 256 61zm43.484 150H346c8.291 0 15 6.709 15 15s-6.709 15-15 15h-46.516c-6.969 34.191-37.255 60-73.484 60h-15l83.994 63.003c6.621 4.966 7.969 14.37 3.018 20.991-4.977 6.627-14.368 7.982-21.006 3.003l-120-90c-5.186-3.867-7.266-10.62-5.244-16.743A15.03 15.03 0 01166 271h60c19.53 0 36.024-12.578 42.237-30H166c-8.291 0-15-6.709-15-15s6.709-15 15-15h102.237c-6.213-17.422-22.707-30-42.237-30h-60c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15h-60.379c6.632 8.763 11.591 18.847 13.863 30z"
            fill="url(#rupee_svg__b)"
            data-original="url(#SVGID_2_)"
          />
        </g>
      </svg>
    );
  }
  