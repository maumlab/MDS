import { IconSize } from "../../assets/icons/icon.type";
import { TypoType } from "../../styles";

export type AlertMessageType = "error" | "success";

export type AlertMessageProps = {
  type: AlertMessageType;
  message: string;
  iconSize?: IconSize;
  typo?: TypoType;
};
