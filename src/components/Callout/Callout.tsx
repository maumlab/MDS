import { CalloutProps } from "./Callout.type";
import * as S from "./Callout.style";
import Text from "../Text";

const Callout = ({ variant, center, children, ...props }: CalloutProps) => {
  return (
    <S.Container data-variant={variant} data-center={center} {...props}>
      {children}
    </S.Container>
  );
};

Callout.Item = function CalloutItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div role="item">{children}</div>;
};

Callout.Icon = function CalloutIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
};

// TODO Callout.Dot 컴포넌트 만들어야함.
Callout.Dot = function CalloutDot({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
};

Callout.Message = function CalloutMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Text typo="caption14Medium" role="message">
      {children}
    </Text>
  );
};

export default Callout;
