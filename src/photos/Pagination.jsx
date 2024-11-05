import React, { useMemo } from "react";
import PropTypes from "prop-types";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const Pagination = ({
  total = 0,
  current = 0,
  pageSize = 25,
  onPageChange = () => {},
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

Pagination.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  pageSize: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Pagination;
