import { useState, useEffect } from 'react';
import { fetchWrapper } from '../util/ajax-wrapper';
import useDebounce from './useDebounce';

const useSearch = (initialQuery = '', initialFilter = '', itemsPerPage = 10) => {
    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [filterOption, setFilterOption] = useState(initialFilter);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchQuery]);

    useEffect(() => {
        if (debouncedSearchQuery.length > 0) {
            fetchRepositories();
        } else {
            setSearchResults([]);
            setTotalResults(0);
        }
    }, [debouncedSearchQuery, filterOption, currentPage, itemsPerPage]);

    const fetchRepositories = async () => {
        try {
            setLoading(true);
            let url = `https://api.github.com/search/repositories?q=${debouncedSearchQuery}&order=desc&page=${currentPage}&per_page=${itemsPerPage}`;
            if (filterOption) {
                url += `&sort=${filterOption}`;
            }
            const response = await fetchWrapper(url);
            setSearchResults(response.items || []);
            setTotalResults(response.total_count || 0);
        } catch (error) {
            console.error("Error fetching repositories:", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        searchQuery: searchQuery,
        filterOption,
        currentPage,
        loading,
        searchResults,
        totalResults,
        handleSearchChange : setSearchQuery,
        handleFilterChange: setFilterOption,
        handlePageChange: setCurrentPage,
    };
};

export default useSearch;
