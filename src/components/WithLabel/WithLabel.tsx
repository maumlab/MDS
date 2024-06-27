import Text from "../Text";
import { BaseLabel } from "./WithLabel.style";
import { WithLabelProps } from "./WithLabel.type";

const WithLabel = ({ label, children }: WithLabelProps) => {
  return (
    <BaseLabel>
      <Text typo="captionRegular" lineHeight={22}>
        {label}
      </Text>
      {children}
    </BaseLabel>
  );
};

export default WithLabel;
