import { useState } from "react";
import { PaginationVariant } from "../Pagination.type";

const getStartPage = ({
  currentPage,
  tick,
  maxPage,
}: {
  currentPage: number;
  tick: number;
  maxPage: number;
}) => {
  let start = currentPage - Math.floor(tick / 2);

  if (start + tick > maxPage) {
    start = maxPage - tick + 1;
  }

  return start > 0 ? start : 1;
};

const getEndPage = ({
  startPage,
  tick,
  maxPage,
}: {
  startPage: number;
  tick: number;
  maxPage: number;
}) => {
  const end = startPage + tick - 1;

  return end <= maxPage ? end : maxPage;
};

const usePagination = ({
  variant,
  defaultTotalPages,
}: {
  variant: PaginationVariant;
  defaultTotalPages?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(defaultTotalPages ?? 0);
  const tick = variant === "LARGE" ? 10 : 5;

  const startPage = getStartPage({ currentPage, tick, maxPage });

  const endPage = getEndPage({ startPage, tick, maxPage });

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const onPrevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  const onNextPage = () => {
    setCurrentPage((prev) => (prev === maxPage ? prev : prev + 1));
  };

  const onChangeMaxPage = (maxPage: number) => {
    setMaxPage(maxPage);
  };

  return {
    startPage,
    endPage,
    currentPage,
    maxPage,
    onChangePage,
    onPrevPage,
    onNextPage,
    onChangeMaxPage,
  };
};

export default usePagination;
