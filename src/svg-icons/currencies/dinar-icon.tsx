import { CurrencyIconProps } from "./currencies.icon.types";

export function DinarIcon(props: CurrencyIconProps) {
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
          id="dinar_svg__a"
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
          d="M74.782 232a8 8 0 01-7.889-9.383A192.259 192.259 0 01222.618 66.893a8 8 0 112.764 15.759 176.214 176.214 0 00-142.729 142.73A8 8 0 0174.782 232zm214.6 213.106a192.259 192.259 0 00155.725-155.724 8 8 0 10-15.76-2.764 176.214 176.214 0 01-142.729 142.73 8 8 0 102.764 15.759zM72 248a8 8 0 108 8 8 8 0 00-8-8zM256 64a8 8 0 108 8 8 8 0 00-8-8zm184 184a8 8 0 108 8 8 8 0 00-8-8zM256 432a8 8 0 108 8 8 8 0 00-8-8zm169.706-6.3A240 240 0 1086.294 86.3a240 240 0 10339.412 339.41zM414.392 97.6A224 224 0 0197.608 414.392 224 224 0 01414.392 97.608zM304 304a8 8 0 008-8v-80a8 8 0 00-16 0v51.117l-33.14-55.233A8 8 0 00248 216v80a8 8 0 0016 0v-51.117l33.14 55.233A8 8 0 00304 304zm32 0a8 8 0 008-8v-32h32v32a8 8 0 0016 0v-80a8 8 0 00-16 0v32h-32v-32a8 8 0 00-16 0v80a8 8 0 008 8zm-104 8v16a8 8 0 01-16 0v-8h-80v8a8 8 0 01-16 0v-16a8 8 0 018-8c.009-.015 8.879-3.5 16.868-47.908C149.55 230.06 152 200.12 152 184a8 8 0 018-8h48a8 8 0 018 8v120h8a8 8 0 018 8zm-32-8V192h-32.152a507.792 507.792 0 01-7.7 69.472c-3.543 18.935-7.6 32.96-12.412 42.528z"
          fill="url(#dinar_svg__a)"
          data-original="url(#linear-gradient)"
        />
      </svg>
    );
  }
  