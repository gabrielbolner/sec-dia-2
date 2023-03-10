import React, { useState } from "react";
import "./index.css";

export function Paginacao({
  totalRecords,
  pageLimit,
  pageNeighbours,
  onPageChanged,
}) {
  const totalPages = Math.ceil(totalRecords / pageLimit);

  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
    onPageChanged(pageNumber);
  };

  const handleClick = (page) => (e) => {
    e.preventDefault();
    goToPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - pageNeighbours && i <= currentPage + pageNeighbours)
      ) {
        pageNumbers.push(
          <li
            key={i}
            className={`page-item ${currentPage === i ? "active" : ""}`}
          >
            <a href="#" className="page-link" onClick={handleClick(i)}>
              {i}
            </a>
          </li>
        );
      } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
        pageNumbers.push(<li key={i}>...</li>);
      }
    }

    return pageNumbers;
  };

  return (
    <nav>
      <ul className="paginacao">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            href="#"
            className="page-link"
            onClick={handleClick(currentPage - 1)}
          >
            {"<"}
          </a>
        </li>
        {renderPageNumbers()}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            href="#"
            className="page-link"
            onClick={handleClick(currentPage + 1)}
          >
            {">"}
          </a>
        </li>
      </ul>
    </nav>
  );
}
