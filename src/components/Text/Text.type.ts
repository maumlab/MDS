import { ColorType, TypoType } from "../../styles";
import { PolymorphicElementProps } from "../../types";

export type TextAsType =
  | "div"
  | "span"
  | "label"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

// normal: 단어 단위로 줄 바꿈
// break-all: 음절 단위로 줄 바꿈
// keep-all: CJK에서 공백 단위로 줄 바꿈
export type WordBreakType = "normal" | "break-all" | "keep-all";

export type TextAlignType = "left" | "center" | "right";

export type TextProps = PolymorphicElementProps<TextAsType> & {
  color?: ColorType;
  typo?: TypoType;
  lineHeight?: number;

  // ellipsis
  truncate?: number;
  wordBreak?: WordBreakType;

  // text-align 속성
  align?: TextAlignType;
};
