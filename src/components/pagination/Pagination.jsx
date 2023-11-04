// PaginationComponent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/slice/pagination/paginationSlice";
import { fetchFreeProducts } from "../../store/slice/productSlice/freeProductSlice";

const Pagination = ({ products }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);

  const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
  const totalProducts = Array.isArray(products) ? products.length : 0;
  console.log(totalProducts);
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };
  const isNextPageDisabled =
    currentPage === totalPages ||
    (currentPage * itemsPerPage >= totalProducts &&
      (currentPage - 1) * itemsPerPage < totalProducts);

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isNextPageDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
