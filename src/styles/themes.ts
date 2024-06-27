import { css } from "@emotion/react";

const colors = {
  black: "#000000",
  white: "#ffffff",

  // gray
  gray1: "#333333",
  gray2: "#4F4F4F",
  gray3: "#828282",
  gray4: "#BDBDBD",
  gray5: "#E0E0E0",
  gray6: "#F2F2F2",
  gray7: "#F9F9F9",
  gray8: "#FCFCFC",
  gray9: "#E9E9E9",

  // blue
  blueDark2: "#274857",
  blueDark1: "#457E99",
  blue: "#62B4DA",
  blueLight1: "#91CBE5",
  blueLight2: "#C0E1F0",
  blueLight3: "#EFF8FB",

  // green
  greenDark2: "#10734F",
  greenDark1: "#1BBF83",
  green: "#35D48D",
  greenLight1: "#76E8AD",
  greenLight2: "#BBF4D6",
  greenLight3: "#F1FDF7",

  // red
  redDark2: "#A92E32",
  redDark1: "#F24147",
  red: "#FF5D5D",
  redLight1: "#FF8E89",
  redLight2: "#FFD2D0",
  redLight3: "#FFF4F3",

  // edge
  offRed: "#FEDFDF",
  offPurple: "#D3CCFF",
  offYellow: "#FFF5D0",
  offOrange: "#FFDEC0",
  offPink: "#FFF2F3",
  offBlue: "#D7E2FF",

  // emr gray
  emrGray1: "#595959",
  emrGray2: "#797979",
  emrGray3: "#878787",
  emrGray4: "#959595",
  emrGray5: "#9f9f9f",

  // emr blue
  emrBlue1: "#007AFF",
  emrBlue2: "#296AFF",
  emrBlue3: "#1C57DB",
  emrBlueDark1: "#0F2E74",
  emrBlueDark2: "#1D5B79",
  emrBlueLight1: "#E5EDFF",

  // emr red
  emrRed1: "#EF6262",
  emrRed2: "#FF2171",
  emrRedDark1: "#BA1A53",
} as const;

export const FONT_WEIGHTS = {
  thin: 100,
  regular: 400,
  medium: 500,
  bold: 700,
} as const;
export const FONT_SIZES = {
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 26,
  xxl: 34,
  xxxl: 45,
} as const;
const typos = {
  h1: css`
    font-size: ${FONT_SIZES.xxxl}px;
    font-weight: ${FONT_WEIGHTS.bold};
  `,
  h2: css`
    font-weight: ${FONT_WEIGHTS.bold};
    font-size: ${FONT_SIZES.xxl}px;
  `,
  h3: css`
    font-weight: ${FONT_WEIGHTS.bold};
    font-size: ${FONT_SIZES.xl}px;
  `,
  h4: css`
    font-weight: ${FONT_WEIGHTS.bold};
    font-size: ${FONT_SIZES.lg}px;
  `,
  h5: css`
    font-weight: ${FONT_WEIGHTS.bold};
    font-size: ${FONT_SIZES.md}px;
  `,
  h6: css`
    font-weight: ${FONT_WEIGHTS.bold};
    font-size: ${FONT_SIZES.sm}px;
  `,
  h7: css`
    font-weight: ${FONT_WEIGHTS.medium};
    font-size: ${FONT_SIZES.sm}px;
  `,
  b1: css`
    font-weight: ${FONT_WEIGHTS.medium};
    font-size: ${FONT_SIZES.xl}px;
  `,
  b2: css`
    font-weight: ${FONT_WEIGHTS.medium};
    font-size: ${FONT_SIZES.lg}px;
  `,
  b3: css`
    font-weight: ${FONT_WEIGHTS.regular};
    font-size: ${FONT_SIZES.md}px;
  `,
  b4: css`
    font-weight: ${FONT_WEIGHTS.regular};
    font-size: ${FONT_SIZES.sm}px;
  `,
  captionTitle: css`
    font-weight: ${FONT_WEIGHTS.medium};
    font-size: ${FONT_SIZES.md}px;
  `,
  captionBold: css`
    font-weight: ${FONT_WEIGHTS.bold};
    font-size: ${FONT_SIZES.xs}px;
  `,
  captionMedium: css`
    font-weight: ${FONT_WEIGHTS.medium};
    font-size: ${FONT_SIZES.xs}px;
  `,
  captionRegular: css`
    font-weight: ${FONT_WEIGHTS.regular};
    font-size: ${FONT_SIZES.xs}px;
  `,
  badge: css`
    font-weight: ${FONT_WEIGHTS.medium};
    font-size: ${FONT_SIZES.xxs}px;
  `,
} as const;

const RADIUS = {
  sm: 4,
  md: 8,
  lg: 16,
  round: 20,
  circle: 9999,
} as const;
const radius = {
  sm: css`
    border-radius: ${RADIUS.sm}px;
  `,
  md: css`
    border-radius: ${RADIUS.md}px;
  `,
  lg: css`
    border-radius: ${RADIUS.lg}px;
  `,
  round: css`
    border-radius: ${RADIUS.round}px;
  `,
  circle: css`
    border-radius: ${RADIUS.circle}px;
  `,
} as const;

const shadow = {
  sm: css`
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  `,
  md: css`
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  `,
  lg: css`
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
  `,
} as const;

const spacing = {
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

const focusVisible = css`
  box-shadow: ${colors.blue} 0px 0px 0px 2px;
`;

const themes = {
  colors,
  typos,
  radius,
  shadow,
  spacing,
  focusVisible,
} as const;

type ColorType = keyof typeof colors;
type TypoType = keyof typeof typos;
type RadiusType = keyof typeof radius;
type ShadowType = keyof typeof shadow;
type SpacingType = keyof typeof spacing;

export default themes;
export type { ColorType, TypoType, RadiusType, ShadowType, SpacingType };
