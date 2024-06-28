import { OutlinedAlertIcon, OutlinedCheckIcon } from "../../assets/icons";
import Text from "../Text";
import { BaseAlertMessage } from "./AlertMessage.style";
import { AlertMessageProps } from "./AlertMessage.type";

const AlertMessage = ({ type, message }: AlertMessageProps) => {
  const color = type === "error" ? "redDark1" : "green";
  const icon =
    type === "error" ? (
      <OutlinedAlertIcon size={16} fillColor={color} />
    ) : (
      <OutlinedCheckIcon size={16} fillColor={color} />
    );

  return (
    <BaseAlertMessage>
      {icon}
      <Text typo="caption12Medium" lineHeight={16} color={color}>
        {message}
      </Text>
    </BaseAlertMessage>
  );
};

export default AlertMessage;
