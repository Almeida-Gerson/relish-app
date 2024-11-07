import { useMemo } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Pagination = ({
  total = 0,
  current = 0,
  pageSize = 25,
  onPageChange,
}: {
  total: number;
  current: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) => {
  const numberOfPages = useMemo(() => {
    return Math.floor(total / pageSize || 1);
  }, [pageSize, total]);

  if (numberOfPages <= 1) {
    return null;
  }

  return (
    <ResponsivePagination
      total={numberOfPages}
      current={current}
      maxWidth={200}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
