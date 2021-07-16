import { useTheme } from "styled-components";

export function CheckedIcon(props: any) {
   const theme = useTheme()
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 98 98"
        {...props}
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <linearGradient
            id="checked_svg__a"
            gradientUnits="userSpaceOnUse"
            x1={57.767}
            y1={96}
            x2={57.767}
            y2={6.323}
            gradientTransform="matrix(1 0 0 -1 0 104)"
          >
            <stop offset={0} stopColor="#00efd1" />
            <stop offset={1} stopColor="#00acea" />
          </linearGradient>
          <path
            d="M33.3 45.9c-1.1-1.2-3-1.3-4.2-.2s-1.3 3-.2 4.2L44 66.3c.6.6 1.3 1 2.1 1h.1c.8 0 1.6-.3 2.1-.9l38.2-38.1c1.2-1.2 1.2-3.1 0-4.2s-3.1-1.2-4.2 0L46.3 60l-13-14.1z"
            fill={theme.color}
            data-original={theme.color}
          />
          <linearGradient
            id="checked_svg__b"
            gradientUnits="userSpaceOnUse"
            x1={49}
            y1={96}
            x2={49}
            y2={6.323}
            gradientTransform="matrix(1 0 0 -1 0 104)"
          >
            <stop offset={0} stopColor="#00efd1" />
            <stop offset={1} stopColor="#00acea" />
          </linearGradient>
          <path
            d="M85.8 50c-1.7 0-3 1.3-3 3 0 18.6-15.2 33.8-33.8 33.8S15.2 71.6 15.2 53 30.4 19.2 49 19.2c1.7 0 3-1.3 3-3s-1.3-3-3-3C27.1 13.2 9.2 31.1 9.2 53S27.1 92.8 49 92.8 88.8 74.9 88.8 53c0-1.7-1.3-3-3-3z"
            fill={theme.color}
            data-original={theme.color}
          />
        </g>
      </svg>
    );
  }