import { OutlinedAlertIcon, OutlinedCheckIcon } from "../../assets/icons";
import Text from "../Text";
import { BaseAlertMessage } from "./AlertMessage.style";
import { AlertMessageProps } from "./AlertMessage.type";

const AlertMessage = ({ type, message }: AlertMessageProps) => {
  const color = type === "error" ? "redDark1" : "green";
  const icon =
    type === "error" ? (
      <OutlinedAlertIcon fillColor={color} />
    ) : (
      <OutlinedCheckIcon fillColor={color} />
    );

  return (
    <BaseAlertMessage>
      {icon}
      <Text typo="captionMedium" color={color}>
        {message}
      </Text>
    </BaseAlertMessage>
  );
};

export default AlertMessage;
