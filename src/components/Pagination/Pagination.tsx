import React from "react";
import styled from "styled-components";
import { PaginationProps } from "./types";
import { IconButton, TextButton } from "../Button";
import { Icons } from "../icons";
import { spacing } from "../../tokens/spacing";
import { typography } from "@/tokens";

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      variant = "compact",
      className,
      ...props
    },
    ref
  ) => {
    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    const handlePageClick = (page: number) => {
      onPageChange(page);
    };

    const renderCompactVariant = () => {
      const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

      return (
        <>
          <IconButton
            type="solid"
            variant="secondary"
            size="small"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            icon={Icons.IconChevronLeftOutline16}
          />

          <PagesWrapper>
            {pages.map((page) => (
              <TextButton
                key={page}
                variant="secondary"
                size="small"
                onClick={() => handlePageClick(page)}
              >
                {page}
              </TextButton>
            ))}
          </PagesWrapper>

          <IconButton
            type="solid"
            variant="secondary"
            size="small"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            icon={Icons.IconChevronRightOutline16}
          />
        </>
      );
    };

    const renderMinimizeVariant = () => {
      return (
        <>
          <IconButton
            type="solid"
            variant="secondary"
            size="small"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            icon={Icons.IconChevronLeftOutline16}
          />

          <PageContent>
            {currentPage}/{totalPages}
          </PageContent>

          <IconButton
            type="solid"
            variant="secondary"
            size="small"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            icon={Icons.IconChevronRightOutline16}
          />
        </>
      );
    };

    return (
      <PaginationContainer
        ref={ref}
        className={className}
        $variant={variant}
        {...props}
      >
        {variant === "compact"
          ? renderCompactVariant()
          : renderMinimizeVariant()}
      </PaginationContainer>
    );
  }
);

Pagination.displayName = "Pagination";

const PaginationContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["$variant"].includes(prop),
})<{ $variant: "compact" | "minimize" }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $variant }) =>
    $variant === "minimize" ? spacing.gap["gap-3"] : spacing.gap["gap-5"]};
`;

const PagesWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.gap["gap-0"]};
`;

const PageContent = styled.span`
  display: inline-flex;
  align-items: center;
  ${typography(undefined, "body2", "medium")}
`;
