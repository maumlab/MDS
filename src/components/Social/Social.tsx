import { ComponentPropsWithRef, forwardRef } from "react";
import { SocialProps } from "./Social.type";
import { BaseSocial } from "./Social.style";
import { themes } from "../../styles";
import {
  SnsKakaoIcon,
  SnsAppleIcon,
  SnsMetriIcon,
  SnsNaverWhiteIcon,
  SnsNaverGreenIcon,
} from "./svgr/export.generated";

const Social = forwardRef(({ variant, type, ...props }: SocialProps, ref: ComponentPropsWithRef<"button">["ref"]) => {
  let icon = undefined;
  let bgColor = undefined;
  let text = undefined;

  switch (variant) {
    case "KAKAO":
      icon = <SnsKakaoIcon />;
      bgColor = type === "secondary" ? themes.colors.white : "#FFDE00";
      text = type === "primary" && "카카오로 시작";
      break;
    case "APPLE":
      icon = <SnsAppleIcon />;
      bgColor = themes.colors.white;
      break;
    case "METRI":
      icon = <SnsMetriIcon />;
      bgColor = themes.colors.white;
      break;
    case "NAVER":
      icon = type === "secondary" ? <SnsNaverGreenIcon /> : <SnsNaverWhiteIcon />;
      bgColor = type === "secondary" ? themes.colors.white : "#03C75A";
      text = type === "primary" && "네이버로 시작";
      break;
  }

  return (
    <BaseSocial
      ref={ref}
      $type={type}
      {...props}
      style={{
        ...props.style,
        backgroundColor: bgColor,
        color: variant === "NAVER" ? themes.colors.white : themes.colors.black,
      }}>
      {icon}
      {text}
    </BaseSocial>
  );
});

export default Social;
