import React from "react";
import SearchResults from '../result/SearchResults';
import useSearch from "../../hooks/useSearch";
import SearchInput from "../../component/SearchInput";
import SearchFilter from "../../component/SearchFilter";

const SearchBox = () => {
    const {
        searchQuery,
        filterOption,
        currentPage,
        loading,
        searchResults,
        totalResults,
        handleSearchChange,
        handleFilterChange,
        handlePageChange,
    } = useSearch();

    const filterOptions = [
        {value: '', label: 'Choose Option'},
        { value: "stars", label: "Stars" },
        { value: "watchers", label: "Watchers Count" },
        { value: "score", label: "Score" },
        { value: "name", label: "Name" },
        { value: "created", label: "Created At" },
        { value: "updated", label: "Updated At" }
    ];

    return (
        <div className="container">
            <div className="search-box">
                <div className="card">
                    <div className="card-div">
                        <label><b>Enter Repository Name:</b></label>
                        <SearchInput
                            value={searchQuery}
                            onChange={(value) => handleSearchChange(value)}
                            placeholder="Search repositories..."
                        />
                    </div>
                    <div>
                        <label style={{ marginLeft: '10px' }}><b>Filter:</b></label>
                        <SearchFilter
                            value={filterOption}
                            onChange={handleFilterChange}
                            options={filterOptions}
                        />
                    </div>
                </div>
            </div>
            {loading ? <p>Loading...</p> :
                <SearchResults
                    results={searchResults}
                    totalResults={totalResults}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            }
        </div>
    );
}

export default SearchBox;
