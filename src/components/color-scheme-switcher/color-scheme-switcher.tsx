import { ColorSchemes, Switch } from "../../themes";
import { useColorScheme } from "../../utils";
import { DarkModeIcon } from "../../svg-icons";

export const ColorSchemeSwitcher = () => {
  
  const [colorScheme, setScheme] = useColorScheme();
  const isDarkMode = colorScheme === ColorSchemes.DARK;
  const handleChange = () => {
    setScheme((scheme) => (scheme === ColorSchemes.DARK ? ColorSchemes.LIGHT : ColorSchemes.DARK));
  };

  return (
    <Switch checked={isDarkMode} onChange={handleChange}>
      <DarkModeIcon/>
    </Switch>
  );
};
