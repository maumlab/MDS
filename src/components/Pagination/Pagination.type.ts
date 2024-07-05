export type PaginationVariant = "LARGE" | "MEDIUM";
export type PaginationType = "metri" | "emr";

export type PaginationProps = {
  type?: PaginationType; // default is 'metri'
  startPage: number;
  endPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
};

export type PageProps = {
  type?: PaginationType; // default is 'metri'
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};
