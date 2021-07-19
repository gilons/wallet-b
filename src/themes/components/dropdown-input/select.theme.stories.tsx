import { Select } from "./dropdown.theme";
import { Option } from "../..";
import { useState } from "react";
import { WithTheme } from "../../../providers";
import { ChinaIcon, DollarIcon, RupeeIcon, SwissFrancIcon, TakaIcon } from "../../../svg-icons";

const SelectStory = {
  title: "Themes/Select",
  component: Select,
};

export default SelectStory;
const options = [
  {
    value: "1",
    text: "Value 1",
    Icon: ChinaIcon,
  },
  {
    value: "2",
    text: "Value 2",
    Icon: RupeeIcon,
  },
  {
    value: "3",
    text: "Value 3",
    Icon: TakaIcon,
  },
  {
    value: "4",
    text: "Value 4",
    Icon: SwissFrancIcon,
  },
  {
    value: "5",
    text: "Value 5",
    Icon: DollarIcon,
  },
];
export const Default = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: Option) => {
    setValue(event.text);
  };
  return (
    <WithTheme>
      <Select
        id={"select-story"}
        value={value}
        onChange={handleChange}
        placeholder={"Select me"}
        options={options}
      ></Select>
    </WithTheme>
  );
};
