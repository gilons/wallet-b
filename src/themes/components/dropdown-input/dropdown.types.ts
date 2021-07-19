import { Option } from "../../types.themes";

export interface DropdownProps<T = string> {
  value?: string;
  placeholder?: string;
  Icon?: React.ComponentType<any>;
  options?: Array<Option<T>>;
  onChange: (item: Option<T>) => void;
}

export interface DropdownItemsContentProps<T = string> {
  options?: Array<Option<T>>;
  onClick?: (item: Option<T>) => void;
  toggleOptions?: () => void;
}
