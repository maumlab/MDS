type AlertMessageType = "error" | "success";

export type AlertMessageProps = {
  type: AlertMessageType;
  message: string;
};
