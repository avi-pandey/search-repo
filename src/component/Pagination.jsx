import React from "react";

const Pagination = ({ currentPage, totalResults, onPageChange }) => {
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalResults / itemsPerPage);

    return (
        <div className="pagination">
            {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>}
            {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
        </div>
    );
};

export default Pagination;