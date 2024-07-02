/**
 *
 * @param hexCode #으로 시작하는 헥스 코드
 * @param opacity 투명도 (0 ~ 100 사이의 정수 or 0 ~ 1 사이의 소수)
 * @returns
 */
export const hexToRgba = (hexCode: string, opacity?: number) => {
  // 헥스 코드가 '#'으로 시작하면 이를 제거합니다.
  let hex = hexCode.replace(/^#/, "");

  // 헥스 코드가 3자리인 경우 6자리로 변환합니다.
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  } else if (hex.length !== 6) {
    throw new Error("Invalid hex code length");
  }

  // 헥스 코드를 정수로 변환하고, 비트 연산으로 RGB 값 추출
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // opacity가 undefined인 경우 RGB 값을 반환합니다.
  if (opacity === undefined) {
    return `rgb(${r}, ${g}, ${b})`;
  }

  // opacity가 정수가 아닌 소수일 때 그대로 반환합니다.
  if (opacity % 1 !== 0) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // opacity가 정수일 때 RGBA 값을 반환합니다.
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
};
