import { useTheme } from "../themes";

export function ChevronUpIcon(props: any) {
    const theme = useTheme()
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 444.819 444.819"
        {...props}
      >
        <path
          d="M433.968 278.657L248.387 92.79c-7.419-7.044-16.08-10.566-25.977-10.566-10.088 0-18.652 3.521-25.697 10.566L10.848 278.657C3.615 285.887 0 294.549 0 304.637c0 10.28 3.619 18.843 10.848 25.693l21.411 21.413c6.854 7.23 15.42 10.852 25.697 10.852 10.278 0 18.842-3.621 25.697-10.852L222.41 213.271 361.168 351.74c6.848 7.228 15.413 10.852 25.7 10.852 10.082 0 18.747-3.624 25.975-10.852l21.409-21.412c7.043-7.043 10.567-15.608 10.567-25.693 0-10.09-3.614-18.751-10.851-25.978z"
          data-original={theme.inverted}
          fill={theme.inverted}
          xmlns="http://www.w3.org/2000/svg"
        />
      </svg>
    );
  }