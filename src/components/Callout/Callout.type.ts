import { ComponentPropsWithoutRef } from "react";

type CalloutVariant = "blue" | "green" | "red";

/**
 * @param {CalloutVariant} variant Callout의 색상을 결정합니다. (bg: light3, font: 0, icon: 0)
 * @param {boolean} center Callout의 내용을 가운데 정렬합니다.
 */
export type CalloutProps = {
  variant: CalloutVariant;
  center?: boolean;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;
