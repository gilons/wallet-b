import { Switch } from "../../themes";
import { useColorScheme } from "../../utils";
import { DarkModeIcon } from "../../svg-icons";

export const ColorSchemeSwitcher = () => {
  const [colorScheme, setScheme] = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const handleChange = () => {
    setScheme((scheme) => (scheme === "dark" ? "light" : "dark"));
  };
  return (
    <Switch checked={isDarkMode} onChange={handleChange}>
      <DarkModeIcon/>
    </Switch>
  );
};
