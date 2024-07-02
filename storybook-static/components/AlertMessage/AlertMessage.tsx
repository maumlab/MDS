import {
  IconSize,
  OutlinedAlertIcon,
  OutlinedCheckIcon,
} from "../../assets/icons";
import Text from "../Text";
import { BaseAlertMessage } from "./AlertMessage.style";
import { AlertMessageProps } from "./AlertMessage.type";

const AlertMessage = ({
  type,
  message,
  iconSize = IconSize.XXS,
  typo = "caption12Medium",
}: AlertMessageProps) => {
  const color = type === "error" ? "redDark1" : "green";
  const icon =
    type === "error" ? (
      <OutlinedAlertIcon size={iconSize} fillColor={color} />
    ) : (
      <OutlinedCheckIcon size={iconSize} fillColor={color} />
    );

  return (
    <BaseAlertMessage>
      {icon}
      <Text typo={typo} lineHeight={iconSize} color={color}>
        {message}
      </Text>
    </BaseAlertMessage>
  );
};

export default AlertMessage;
