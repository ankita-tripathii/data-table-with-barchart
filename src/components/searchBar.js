import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/action/action';
import ApiService from '../services/apiServices';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  const handleSearch = async () => {
    try {
      const response = await ApiService.searchData(searchTerm);
      dispatch(setData(response));
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
        // If search term is empty, fetch all data
        const fetchData = async () => {
          try {
            const response = await ApiService.fetchData();
            dispatch(setData(response));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
      }
    }, 500);

    return () => clearTimeout(timeoutId);

  }, [searchTerm, dispatch]);

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
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default SearchBar;
