/**
 * @returns start부터 end까지를 가지는 배열을 리턴하는 함수
 */
export const range = ({ start, end }: { start: number; end: number }) => {
  return [...Array(end + 1).keys()].slice(start);
};
