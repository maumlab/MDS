import Text from "../Text";
import { BaseLabel } from "./WithLabel.style";
import { WithLabelProps } from "./WithLabel.type";

const WithLabel = ({ required = false, label, children }: WithLabelProps) => {
  return (
    <BaseLabel data-required={required}>
      <Text typo="caption12Medium">{label}</Text>
      {children}
    </BaseLabel>
  );
};

export default WithLabel;
