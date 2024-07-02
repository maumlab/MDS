import { createContext, useContext } from "react";
import { TabItemProps, TabProps, TabProviderProps } from "./Tab.type";
import {
  BaseLineTabItem,
  BaseLineTabWrapper,
  BaseTextTabItem,
  BaseTextTabWrapper,
} from "./Tab.style";

const TabProvider = createContext<TabProviderProps>({
  variant: "line",
  selectedValue: "",
  onChange: (_: string) => null,
  size: "large",
});

const Tab = ({
  variant = "line",
  size = "large",
  children,
  selectedValue,
  onChange,
}: TabProps) => {
  return (
    <TabProvider.Provider value={{ selectedValue, onChange, variant, size }}>
      {variant === "line" ? (
        <BaseLineTabWrapper data-size={size}>{children}</BaseLineTabWrapper>
      ) : (
        <BaseTextTabWrapper>{children}</BaseTextTabWrapper>
      )}
    </TabProvider.Provider>
  );
};

Tab.Item = ({ value, children }: TabItemProps) => {
  const { selectedValue, onChange, variant } = useContext(TabProvider);

  return variant === "line" ? (
    <BaseLineTabItem
      value={value}
      data-active={selectedValue === value}
      onClick={() => onChange(value)}
    >
      {children}
    </BaseLineTabItem>
  ) : (
    <BaseTextTabItem
      value={value}
      data-active={selectedValue === value}
      onClick={() => onChange(value)}
    >
      {children}
    </BaseTextTabItem>
  );
};

export default Tab;
