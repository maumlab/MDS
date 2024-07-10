import Text from "../Text";
import { BaseLabel } from "./WithLabel.style";
import { WithLabelProps } from "./WithLabel.type";

const WithLabel = ({
  required = false,
  label,
  children,
  typo = "caption12Medium",
  gap = 2,
}: WithLabelProps) => {
  return (
    <BaseLabel data-required={required} style={{ gap }}>
      <Text typo={typo}>{label}</Text>
      {children}
    </BaseLabel>
  );
};

export default WithLabel;
