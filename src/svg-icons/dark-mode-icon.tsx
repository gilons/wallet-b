import { useTheme } from "../themes";

export const DarkModeIcon = () => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14px"
      height="14px"
      viewBox="0 0 512.002 512.002"
    >
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          d="M508.269 368.626a15 15 0 00-17.234-3.862c-26.312 11.405-54.299 17.189-83.185 17.189-115.449 0-209.374-93.925-209.374-209.374 0-55.386 21.429-107.605 60.341-147.041a15.002 15.002 0 002.635-17.448A14.99 14.99 0 00245.664.209C186.247 10.153 131.858 40.983 92.515 87.02 52.724 133.578 30.81 192.994 30.81 254.322c0 30.593 5.308 60.368 15.465 88.286 20.412-17.352 46.077-26.82 73.123-26.82 29.792 0 57.913 11.488 79.179 32.349 12.574 12.336 21.949 27.133 27.624 43.447a79.707 79.707 0 0142.594 70.619c0 17.733-5.821 34.13-15.644 47.392a261.608 261.608 0 0035.338 2.407c45.416 0 90.072-11.984 129.141-34.658 37.889-21.988 69.789-53.501 92.251-91.129a15 15 0 00-1.612-17.589z"
          data-original={theme.inverted}
          fill={theme.inverted}
        />
        <path
          d="M188.997 512.002H49.8c-27.46 0-49.799-22.34-49.799-49.799 0-23.273 16.047-42.868 37.658-48.303 3.043-16.773 11.172-32.185 23.569-44.346 15.623-15.326 36.282-23.767 58.171-23.767s42.548 8.44 58.171 23.766c12.396 12.161 20.525 27.573 23.569 44.347 21.611 5.435 37.658 25.029 37.658 48.303-.001 27.459-22.341 49.799-49.8 49.799z"
          data-original={theme.inverted}
          fill={theme.inverted}
        />
        <g>
          <path
            d="M438.542 259.966H299.346c-27.46 0-49.8-22.34-49.8-49.799 0-23.273 16.047-42.868 37.658-48.303 3.043-16.773 11.172-32.186 23.568-44.347 15.623-15.326 36.282-23.767 58.172-23.767 21.889 0 42.548 8.44 58.171 23.767 12.396 12.161 20.525 27.573 23.569 44.347 21.61 5.435 37.657 25.029 37.657 48.303.001 27.459-22.339 49.799-49.799 49.799z"
            data-original={theme.inverted}
            fill={theme.inverted}
          />
        </g>
      </g>
    </svg>
  );
};