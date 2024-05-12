import React from "react";
import Pagination from '../../component/Pagination'
import ResultCard from '../../component/ResultCard'

const SearchResults = ({ results, totalResults, currentPage, onPageChange }) => {
    return (
        <div className="search-results">
            {totalResults !== 0 && <div className="total-results">Total Repositories: {totalResults}</div>}
            <div className="results">
                {results.map((result) => (
                    <ResultCard key={result.id} result={result} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalResults={totalResults} onPageChange={onPageChange} />
        </div>
    );
};

export default SearchResults;
