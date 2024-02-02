import React, { useState, useEffect } from 'react';
import ApiService from '../services/apiServices';

const SearchBar = ({ onDataFiltered }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await ApiService.searchData(searchTerm);
      setSearchData(response);
    } catch (error) {
      console.error('Error fetching search data:', error);
    }
  };

  useEffect(() => {
    // Delay the search to avoid frequent API calls while typing
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        handleSearch();
      } else {
        // If search term is empty, clear the search data
        setSearchData([]);
      }
    }, 200);

    return () => {
      clearTimeout(timeoutId);

      // Communicate search results to parent component after clearing timeout
      onDataFiltered(searchData);
    };
  }, [searchTerm, onDataFiltered, searchData]);

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      // Trigger search when Enter key is pressed
      handleSearch();
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
      />
    </div>
  );
};

export default SearchBar;
