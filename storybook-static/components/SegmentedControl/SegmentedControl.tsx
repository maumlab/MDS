import { createContext, useContext } from "react";
import { BaseContainer, ItemContainer } from "./SegmentedControl.style";
import {
  SegmentedControlItemProps,
  SegmentedControlProps,
  SegmentedControlProviderProps,
} from "./SegmentedControl.type";
import Text from "../Text";

const SegmentedControlProvider = createContext<SegmentedControlProviderProps>({
  variant: "basic",
  selectedValue: "",
  onChange: () => null,
});

const SegmentedControl = ({
  variant = "basic",
  selectedValue,
  onChange,
  children,
}: SegmentedControlProps) => {
  return (
    <SegmentedControlProvider.Provider
      value={{ selectedValue, variant, onChange }}
    >
      <BaseContainer $variant={variant}>{children}</BaseContainer>
    </SegmentedControlProvider.Provider>
  );
};

SegmentedControl.Item = ({ children, value }: SegmentedControlItemProps) => {
  const { selectedValue, variant, onChange } = useContext(
    SegmentedControlProvider
  );
  const active = value === selectedValue;

  return (
    <ItemContainer
      data-active={active}
      $variant={variant}
      onClick={() => onChange(value)}
    >
      <Text color={active ? "blue" : "gray2"} typo="caption14Medium">
        {children}
      </Text>
    </ItemContainer>
  );
};

export default SegmentedControl;
