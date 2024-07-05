import {
  ChevronLeftIcon,
  ChevronRightIcon,
  IconSize,
} from "../../assets/icons";
import { range } from "../../lib";
import { BasePage, BasePagination } from "./Pagination.style";
import { PageProps, PaginationProps } from "./Pagination.type";

const Page = ({
  type = "metri",
  active = false,
  disabled = false,
  children,
  onClick,
}: PageProps) => {
  return (
    <BasePage
      $type={type}
      onClick={onClick}
      disabled={disabled}
      data-active={active}
    >
      {children}
    </BasePage>
  );
};

const Pagination = ({
  type = "metri",
  startPage,
  endPage,
  currentPage,
  onChangePage,
  onPrevPage,
  onNextPage,
}: PaginationProps) => {
  const pages = range({ start: startPage, end: endPage }).map((page) => (
    <Page
      key={page}
      onClick={() => onChangePage(page)}
      active={currentPage === page}
      type={type}
    >
      {page}
    </Page>
  ));

  return (
    <BasePagination>
      <Page disabled={currentPage === startPage} onClick={onPrevPage}>
        <ChevronLeftIcon size={IconSize.XS} />
      </Page>
      {pages}
      <Page onClick={onNextPage} disabled={currentPage === endPage}>
        <ChevronRightIcon size={IconSize.XS} />
      </Page>
    </BasePagination>
  );
};

export default Pagination;
