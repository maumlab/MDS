// 타입 매핑: 각 속성 이름에 `$`를 추가
export type AddDollarSign<T> = {
  [K in keyof T as `$${K & string}`]: T[K];
};
