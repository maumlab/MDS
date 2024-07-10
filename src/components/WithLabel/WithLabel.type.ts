import { TypoType } from "../../styles";

export type WithLabelProps = {
  required?: boolean;
  label: string;
  children: React.ReactNode;
  typo?: TypoType;
  gap?: number;
};
