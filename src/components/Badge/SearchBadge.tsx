import { ElementRef, forwardRef } from "react";
import { BaseBadge } from "./Badge.style";
import { BadgeSearch, SearchBadgeProps } from "./Badge.type";

const SearchBadge = forwardRef<ElementRef<"span">, SearchBadgeProps>(
  ({ search }: SearchBadgeProps, ref) => {
    let label = "";
    switch (search) {
      case BadgeSearch.Group:
        label = "묶음처방";
        break;
      case BadgeSearch.Level:
        label = "레벨";
        break;
      case BadgeSearch.Abbreviations:
        label = "약자";
        break;
      case BadgeSearch.Korean:
        label = "한글";
        break;
    }

    return (
      <BaseBadge $variant="search" data-search={search} ref={ref}>
        {label}
      </BaseBadge>
    );
  }
);

export default SearchBadge;
